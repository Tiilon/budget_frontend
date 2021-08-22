import React from 'react'
import Form from './form';
import Joi from 'joi-browser'

class Filter extends Form {
    state = { 
        data: {
            date: ''
        }
     }

     schema = {date: Joi.date()}

     doSubmit = async () => {
        console.log('doSubmit')
     }

     

    render() { 
        const {onChange} = this.props
        const {data} = this.state
        return ( 
            <React.Fragment>
                <div className="row">
                    <form >
                        <div className="col-5 m-auto">
                            <div className="ml-5">
                                <input type='date' name='date' value={data["date"]} className='form-control' onChange={onChange}/>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </React.Fragment>
         );
    }
}
 
export default Filter;