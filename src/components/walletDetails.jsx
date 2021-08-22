import React, { Component } from 'react'
import axios from 'axios'
import Loading from './loading';
import { authAxios } from '../services/httpServices';

class WalletDetails extends Component {
    state = {  
        bank: '', 
        transaction: [],
        columns: [
            {path: 'date', label: 'Date'},
            {path: 'amount', label: 'Amount'},
            {path: 'type', label: 'Type'},
            {path: 'reason', label: 'Reason'}
        ],
        isLoading: true,
     }

     async componentDidMount() {
         const accountID = this.props.match.params.id
         const {data} = await authAxios.get(`http://127.0.0.1:8000/api/wallet-details/${accountID}/`)
         const {bank, transaction} = data
         this.setState({bank, transaction, isLoading: false})
     }
     

    render() { 
        const {columns, transaction, bank} = this.state
       
        if(this.state.isLoading) return <Loading/>
        return (    
            <React.Fragment>

                <h1>Welcome to your {bank} account </h1>
                <div className="row mt-5">
                    <div className="col-2"></div>
                
                    <div  className="col mr-5">
                        <div className="card">
                            <div className="card-title text-center">
                                <h3>Activities Log</h3>
                            </div>
                            <div className="card-body">
                            <div className="table-wrapper-scroll-y my-custom-scrollbar">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                            {columns.map(column=>(
                                            <th key={column.path} scope="col">{column.label}</th>
                                            ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {transaction.map(tr =>(
                                                <tr key={tr.id}>
                                                    <td key={tr.date}>{tr.date}</td>
                                                    <td key={tr.amount}>{tr.amount}</td>
                                                    <td key={tr.type}>{tr.type}</td>
                                                    <td key={tr.reason}>{tr.reason}</td>
                                                </tr>))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>  
            </div>
               
            </React.Fragment>
         );
    }
}
 
export default WalletDetails;