import React, { Component } from 'react'

class Wallets extends Component {
    state = { 
        transactions: [],
        columns: [
            {path: 'date', label: 'Date'},
            {path: 'amount', label: 'Amount'},
            {path: 'type', label: 'Type'},
            {path: 'reason', label: 'Reason'}
        ],
        date : ''
    }


    render() { 
        const {accounts} = this.props
        const {columns} = this.state
        
        return ( 
            <React.Fragment>
                <div className="row mt-5">
                    {accounts.map( account => (
                        <div key={account.id} className="col-6">
                            <div className="card">
                                <div className="card-title text-center">
                                    {account.bank} - {account.account_number}
                                    
                                </div>
                                <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                        {columns.map(column=>(
                                        <th key={column.path} scope="col">{column.label}</th>
                                        ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {account.transaction.map(transaction =>(
                                             <tr key={transaction.id}>
                                                <td>{transaction.date}</td>
                                                <td>{transaction.amount}</td>
                                                <td>{transaction.type}</td>
                                                <td>{transaction.reason}</td>
                                            </tr>
                                        ))}
                                       
                                    </tbody>
                                    
                                    </table>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
                
            </React.Fragment>
         );
    }
}
 
export default Wallets;