import React from 'react';
import './ExpenseItem.css';
import ExpenseData from './ExpenseData';
// import { useState } from 'react';

const ExpenseItem = (props) => {
// const description = props.expenseData.item;

// const [description,setdescription] = useState(props.expenseData.item);
// const [clearbtn,setclearbtn] = useState("Update Now");
//     const updateHandler = () => {
//         setdescription("updated");
//         setclearbtn("clear");
//     }
// const [resetbtn,setresetbtn] = useState("Reset");
//     const ResetHandler = () => {
//         setresetbtn("Reset");
//         setdescription(props.expenseData.item);
//         setclearbtn("Update Now");

//     }


    return(
        <div className='expense_item'>
            <ExpenseData months={props.months} expenseData={props.expenseData}/>

            <div className='text_Aline'>
                {props.expenseData.item}
                {/* {description} */}
            </div>
            <div className='price_Box'>
                $ {props.expenseData.price}
            </div>
            {/* <div>
            <button onClick={updateHandler}>{clearbtn}</button>
            <button onClick={ResetHandler}>{resetbtn}</button>
            </div> */}
        </div>
    )

}

export default ExpenseItem;