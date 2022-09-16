import React, { useState } from 'react';
import './App.css';
// import ExpenseData from './Components/ExpenseData';
// import ExpenseItem from './Components/ExpenseItem';
import Expenses from './Components/Expenses';
import AddExpense from './Components/NewExpense/AddExpense';

function App(){
    // const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Dec"];
    const dummyData=[
        {
            id : "expense_1",
            date : new Date (2021,5,21),
            item : "New Tv",
            price : 799.49,
        },
        {
            id : "expense_2",
            date : new Date (2020,3,28),
            item : "Car Insurance",
            price : 294.67,
        },
        {
            id : "expense_3",
            date : new Date (2021,1,12),
            item : "New Desk(Wooden)",
            price : 450,
        },
        {
            id : "expense_4",
            date : new Date (2021,0,12),
            item : "New Chair",
            price : 450,
        },
    ];

    const [expenseData, setExpenseData] = useState(dummyData)
    
    const getAddExpenseForm = (dataobj) =>{
        // alert('Hi from Abhis App');
        // console.log(dataobj);

        // expenseData.push(dataobj); 
        // console.log(expenseData);

        setExpenseData([dataobj, ...expenseData]);
        // console.log(expenseData);
    }

    
    return(
        <div>
            <div className='form_Style'>
                <AddExpense sendDataApp = {getAddExpenseForm }/>
            </div>

        <div className='big_Box'>
            <Expenses expenseData={expenseData}/>
        </div>
        </div>
    )
    
}


export default App;