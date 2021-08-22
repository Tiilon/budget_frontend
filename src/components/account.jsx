import React, { Component } from 'react'

class Account extends Component {
    state = { 
        account: {},
    }
    
    componentDidMount() {
        
    }
    
    handleClick = (account) => {
        console.log(account.bank)
    }
    
    
    render() { 
        
        return ( 
            <h1>hi</h1>
         );
    }
}
 
export default Account;