import React from 'react'
import Form from './common/form';
import Joi from 'joi-browser'
import axios from 'axios';

class NewActivity extends Form {
    state = { 
        data: {
           account:'',
           amount:'', 
           type:"",
           reason: ''
        },
       
        errors:{}
     }

    schema = {
        account: Joi.string().required().label('Account'),
        amount: Joi.number().required().label('Amount'),
        type: Joi.string().required().label('Type'),
        reason: Joi.string().required().label('Reason'),
    }

    saveTransaction=(transaction)=>{
        axios.post('http://127.0.0.1:8000/api/add-transactions/', transaction)
    }

    doSubmit = async () => {
        const errors = this.props.accounts.errors
        if(errors) {
            this.setState({errors: errors})
            return
        }
        await this.saveTransaction(this.state.data)
        this.props.history.push("/")
     }


    render() { 
        const {accounts} = this.props
        return (
            <React.Fragment>
                <h1>Add A Transaction</h1>
                <div className="mt-5">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="id_account" className='form-label'>Account</label>
                            <select name="account" id="id_account" className='form-select' onChange={this.handleChange}>
                                <option value="">------</option>
                                {accounts.map(account => 
                                   <option key={account.id} value={account.id}>{account.bank}</option> 
                                    )}
                            </select>
                        </div>
                        
                        <div className="mt-5">
                            {this.renderInput('amount', 'Amount (GHS)', 'number')}
                        </div>
                        <div className="form-group mt-5">
                            <label htmlFor="id_type" className="form-label">Type</label>
                            <select name="type" className='form-select' id="id_type" onChange={this.handleChange}>
                                <option value="">------</option>
                                <option value="EXPENSE">Expense</option>
                                <option value="INCOME">Income</option>
                            </select>
                        </div>
                        <div className="mt-5">
                            {this.renderInput('reason', 'Reason', 'text')}
                        </div>
                        <div className="col mt-4">
                            {this.renderButton('Save')}
                        </div>
                    </form>
                </div>
            </React.Fragment>
         );
    }
}
 
export default NewActivity;