import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'

class Chart extends Component {
    state = { 
        months: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
     }

    render() { 
        const {income_data, expense_data } = this.props
        const {months} = this.state
        return ( 
            <React.Fragment>
                <Line
                data={{
                    labels: months,
                    datasets: [
                        {
                        label: 'Income',
                        data: income_data,
                    
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1 
                },
                {
                    label: 'Expense',
                    data: expense_data,
                
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1 
            }

            ],
                
                }}
                height={350}
                width={500}
                options={{
                    maintainAspectRatio:false,
                    scales:{
                        yAxes:[
                            {
                                ticks:{
                                    beginAtZero:true
                                }
                            }
                        ]
                    }
                }}
                />
            </React.Fragment>
         );
    }
}
 
export default Chart;