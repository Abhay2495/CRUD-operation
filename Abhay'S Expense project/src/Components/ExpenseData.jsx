import React from 'react';
import './ExpenseData.css';


const ExpenseData = ({expenseData}) => {
const month = expenseData.date.toLocaleString("en-us",{month: "long"});
const year = expenseData.date.getFullYear();
const date = expenseData.date.getDate();

    return(
        <div className='expense_Box'>

                <div className='expense_data_month'>{month}</div>
                <div className='expense_data_year'>{year}</div>
                <div className='expense_data_date'>{date}</div>

        </div>
    )

}
export default ExpenseData;