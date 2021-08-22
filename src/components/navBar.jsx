import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'


class NavBar extends Component {
    

     getAccountUrl=(id) =>{
         return '/wallet/' + id
     }
     
    render() { 
        const {accounts, user} = this.props;
        return ( 
            
            <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-expand-md navbar-light bg-light mb-5">
                <Link className="navbar-brand m-2" to="/">Planner<i className="bi bi-house-fill"></i> {user.first_name && <b>{user.first_name}'s Account</b>}</Link>
                <div className="mx-auto">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <button className=" btn nav-link dropdown-toggle" href='#' id="accounts" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-person-square"></i> 
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="accounts">
                                    <li>
                                        <NavLink className="dropdown-item" to="#">Login</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="#">Logout</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <button className=" btn nav-link btn btn-outline dropdown-toggle text-dark" href='#' id="accounts" data-bs-toggle="dropdown" aria-expanded="false">
                                    Wallets
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="accounts">
                                    {accounts.map((account) => (
                                    <li>
                                            <Link className="dropdown-item" key={account.id} to={this.getAccountUrl(account.id)}>{account.bank}</Link>
                                        </li> 
                                    ))}
                                    
                                    
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink to="/budget/new">
                                <button className=" btn btn-outline" >    
                                        + Budget
                                </button>  
                                </NavLink>
                                <NavLink to='/new-activity'>
                                <button title="Add New Activity"className="btn btn-outline  btn-sm">+ Log An Activity</button> 
                                </NavLink>
                                <NavLink to="/new/wallet">
                                <button className="btn btn-outline btn-sm ">+ Add Wallet</button> 
                                </NavLink>
                                {!user.first_name && (
                                <React.Fragment>
                                <NavLink to="/register">
                                    <button className="btn btn-outline btn-sm ">Register</button> 
                                </NavLink>
                                <NavLink to="/login">
                                    <button className="btn btn-outline btn-sm ">Login</button> 
                                </NavLink>
                                </React.Fragment>
                                )}
                                {user.first_name && (
                                <React.Fragment>
                                <NavLink to="/logout">
                                    <button className="btn btn-outline btn-sm ">Logout</button> 
                                </NavLink>
                                </React.Fragment>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
                
            </nav>
         );
    }
}
export default NavBar;