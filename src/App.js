import React, { Component } from 'react'
import './App.css';
import {Switch, Route} from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { getAccounts } from './services/accounts';
import NavBar from './components/navBar';
import Wallet from './components/wallets';
import NewWallet from './components/newWallet'
import Body from './components/body';
import Account from './components/account';
import NewActivity from './components/newTransaction';
import WalletDetails from './components/walletDetails'
import Budget from './components/newBudget'
import Loading from './components/loading'
import Register from './components/register'
import Login from './components/login'
import Logout from './components/logout'
import UserBody from './components/User_home';

class App extends Component {

  state = { 
    currentUser:{},
    accounts: [],
    isLoading: false,
 }

async componentDidMount() {
  const {currentUser} = this.state
  try{
    const jwt = localStorage.getItem('access_token')
    const user = jwtDecode(jwt)
    this.setState({currentUser:user})   
  }catch(e){} 

  if(currentUser){
    try{
    const {data} = await getAccounts();
    // const response = await getUserAccounts(this.state.currentUser.user_id);
    // console.log(response.data)
    this.setState({accounts:data, isLoading: true }); 
  }catch(e){}
  }
 
 }
// user_accounts:response.data
  render() {
    if(this.state.isLoading) return <div><Loading/></div>;
   
    const {accounts, currentUser} = this.state
    
    return (
    <React.Fragment>
      <NavBar accounts={accounts} user={currentUser}/>
      <main className="container">
        <Switch>
          <Route path='/' exact component={Body}></Route>
          <Route path='/wallet/:id' render={(props) => <WalletDetails accounts={accounts} {...props}/>}></Route>
          <Route path='/budget/:id' render={(props) => <Budget accounts={accounts} {...props} />}></Route>
          <Route path='/account/:id' component={Account}></Route>
          <Route path='/register' render={(props) => <Register accounts={accounts} {...props} />}></Route>
          <Route path='/login' render={(props) => <Login accounts={accounts} {...props} />}></Route>
          <Route path='/user/:id' render={(props) => <UserBody accounts={accounts} user={currentUser.user_id} {...props} />}></Route>
          <Route path='/logout' render={(props) => <Logout accounts={accounts} {...props} />}></Route>
          <Route path='/wallets' render={(props) => <Wallet accounts={accounts} {...props}/>}></Route>
          <Route path='/new/wallet' render={(props) => <NewWallet accounts={accounts} user={this.state.currentUser} {...props} />}></Route>
          <Route path='/new-activity' render={(props) => <NewActivity accounts={accounts} {...props} />}></Route>
       </Switch>
      </main>
    </React.Fragment>
    

  );
  }
}

export default App;
