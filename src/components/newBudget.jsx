import React from 'react'
import Form from './common/form';
import  Joi  from 'joi-browser';
import axios from 'axios'

class Budget extends Form {
    state = { 
        data:{
            amount:'',
            month: '',
        },
        errors:{},
        options:[
            {id:1, month:"Jan"},
            {id:2, month:"Feb"},
            {id:3, month:"Mar"},
            {id:4, month:"Apr"},
            {id:5, month:"May"},
            {id:6, month:"Jun"},
            {id:7, month:"Jul"},
            {id:8, month:"Aug"},
            {id:9, month:"Sep"},
            {id:10, month:"Oct"},
            {id:11, month:"Nov"},
            {id:12, month:"Dec"},
        ]
     }

     schema = {
         amount: Joi.number().required().label('Amount'),
         month: Joi.string().required().label('Month'),
     }

     saveBudget = (budget) => {
        axios.post('http://127.0.0.1:8000/api/budget-new/', budget)
     }

    doSubmit = async () => {
        // const {errors} = this.props.accounts.errors
        // if(errors){
        //     this.setState({errors:errors})
        //     return
        // }
        await this.saveBudget(this.state.data)
        this.props.history.push('/')
    }
    render() { 
        const {options} = this.state
        console.log(options)
        return ( 
            <React.Fragment>
                <div className="row mt-5">
                    <div className="col-6 align-middle">
                        <h1>Create A Budget For The Month</h1>
                        <form action="" onSubmit={this.handleSubmit}>
                            <div className="m-2">
                                {this.renderInput('amount', 'Amount', 'number')} 
                            </div>
                            <div className="m-2">
                                <div className="form-group mt-5">
                                    <label htmlFor="id_month" className="form-label">Month</label>
                                    <select name="month" className='form-select' id="id_month" onChange={this.handleChange}>
                                        <option value="">------</option>
                                        {options.map(option => 
                                            <option key={option.id} value={option.id}>{option.month}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="m-2">
                                    {this.renderButton('Save')}
                                </div>
                            </div> 
                        </form> 
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Budget;