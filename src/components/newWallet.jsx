import React from 'react';
import Form from './common/form'
import Joi from 'joi-browser'
import axios from 'axios'
import {authAxios} from '../services/httpServices';

class NewWallet extends Form {
    state = { 
        data: {
            bank: '',
            account_number: '',
        },
        errors: {},
     }
     

     schema = {
        bank: Joi.string().required().label('Bank'),
        account_number: Joi.number().required().min(10).label('Account Number'),
     }

     
     saveWallet = (account) => {
        authAxios.post('http://127.0.0.1:8000/api/create/account/', account)
     }

     doSubmit = async () => {
        const errors = this.props.accounts.errors
        if(errors) {
            this.setState({errors: errors})
            return
        }
        await this.saveWallet(this.state.data)
        this.props.history.push("/")
     }

    render() { 
        return ( 
            <React.Fragment>
                <h1>Add A Wallet</h1>
                <div className="mt-5">
                    <form action="" onSubmit={this.handleSubmit}>
                        <div className="row">
                            
                                
                                <div className="col mt-2 m-3">
                                    {this.renderInput('bank', 'Bank')} 
                                </div> 
                               
                                
                                <div className="col mt-2 m-3">
                                    {this.renderInput('account_number', 'Account Number')} 
                                </div>
                                
                                <div className="col mt-4">
                                    {this.renderButton('Save')}
                                </div>
                            
                        </div>
                       
                    </form>
                </div>
               
            </React.Fragment>
         );
    }
}
 
export default NewWallet;