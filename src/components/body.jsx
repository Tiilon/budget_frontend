import React, { Component } from 'react'
import axios from 'axios'
import { authAxios } from '../services/httpServices';
import Loading from './loading'
import Chart from './chart'
import {Link} from 'react-router-dom'

class Body extends Component {
    state = { 
        income: '',
        expense: '',
        latestIncome:'',
        latestIncomeAmount:'',
        latestExpense:'',
        latestExpenseAmount:'',
        currentBudget: {},
        isLoading: true,
        chart_income:[],
        chart_expense:[],
    }

    async componentDidMount() {
        const {data} = await authAxios.get("monthly-income/")
        const {total_income} = data
        const expense = await authAxios.get("monthly-expense/")
        const latestIncome = await authAxios.get("monthly-income/")
        const latestExpense = await authAxios.get("monthly-expense/")
        const chart_expense = await authAxios.get("chart-expense/")
        const chart_income = await authAxios.get("chart-income/")
        const currentBudget = await authAxios.get("current-budget/")

        
        this.setState({
            income: total_income,
            expense: expense.data.total_expense, 
            latestIncome: latestIncome.data, 
            latestExpense:latestExpense.data,
            currentBudget: currentBudget.data,
            chart_expense: chart_expense.data.expense,
            chart_income: chart_income.data.income,
            isLoading:false,
        })
    }

    
        
    
    render() { 
        const {currentBudget,isLoading,chart_income,chart_expense, latestIncome, latestExpense} = this.state
        console.log(localStorage.getItem('access_token'))
        
        if(isLoading) return <Loading/>
        return ( 
            <React.Fragment>
                <h1>Welcome to Your Monthly Money Tracker System </h1>
                <div className="row mt-5">
                    <div className="col">
                        <div className="card">
                            <div className="card-header"><h5>Monthly Budget</h5></div>
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">This is your budget for the month</h6>
                                <h1>
                                    <p className="card-text">{currentBudget.error ? currentBudget.error:`Ghs ${parseInt(currentBudget.amount).toLocaleString()}` }</p>
                                </h1>
                                
                                <Link to='#' className="card-link"><i className="bi bi-info-circle-fill"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" >
                        <div className="card-header"><h5>Monthly Income</h5></div>
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">Money Added To Funds</h6>
                                <h1>
                                    <p className="card-text">Ghs {latestIncome['status'] ? 0 : latestIncome.total_income}</p>
                                </h1>
                                
                                <h6 className="card-subtitle mb-2 text-success">Latest: {latestIncome['status'] ? 0 : latestIncome.monthly_income[0].account.bank} | Amount: Ghs {latestIncome['status'] ? 0 : latestIncome.monthly_income[0].amount}</h6>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" >
                        <div className="card-header"><h5>Monthly Expense</h5></div>
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">Money Removed To Funds</h6>
                                <h1>
                                    <p className="card-text">Ghs {latestExpense['status'] ? 0 : latestExpense.total_expense}</p>
                                </h1>
                                
                                <h6 className="card-subtitle mb-2 text-success">Latest: {latestExpense['status'] ? 0 : latestExpense.monthly_expense[0].account.bank} | Amount: Ghs {latestExpense['status'] ? 0 : latestExpense.monthly_expense[0].amount}</h6>
                                
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="row mt-2">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="card">
                            <div className="card-body">
                                 <Chart income_data={chart_income} expense_data={chart_expense}/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
         );
    }
}
 
export default Body;