import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import FilterYear from './FilterYear';
import Chart from './NewExpense/Chart';

const Expenses = ({ expenseData }) => {

    const [UpdateFilterYear, setUpdateFilterYear] = useState("All");
    // console.log(UpdateFilterYear);

    const filterYear = (year) => {
        console.log(year);
        setUpdateFilterYear(year);
    }

    const filterRecord = expenseData.filter((exp) => {

        if(UpdateFilterYear === 'All'){
            return exp
        }
        else{

        return (exp.date.getFullYear().toString() === UpdateFilterYear);
        // return console.log(exp.date.getFullYear());
    }});


    return (
        // <div>
        // <ExpenseItem expenseData={expenseData[0]}/>
        // <ExpenseItem expenseData={expenseData[1]}/>
        // <ExpenseItem expenseData={expenseData[2]}/>
        // </div>
        <div>
            <div>
                <FilterYear filterYear={filterYear} UpdateFilterYear={UpdateFilterYear} />
            </div>
            <div>
                <Chart filterRecord = {filterRecord}/>
            </div>
            {
                filterRecord.length === 0 &&
                <h1>No Data Here</h1>
            }

            {/* {
                UpdateFilterYear === 'All' &&
                // expenseData.map((changing) => {
                //     return (
                //         <div className='expense_Alignment'>
                //             <ExpenseItem key={changing.id} expenseData={changing} />
                //         </div>
                //     )
                // };)
            } */}

            {
                filterRecord.length > 0 &&
                filterRecord.map((changing) => {
                    return (
                        <div className='expense_Alignment'>
                            <ExpenseItem key={changing.id} expenseData={changing} />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Expenses;