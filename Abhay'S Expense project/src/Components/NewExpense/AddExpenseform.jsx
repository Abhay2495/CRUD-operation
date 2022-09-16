import React, { useState } from "react";
import './AddExpenseform.css';

// const AddExpenseform = ({sendData}) =>{
const AddExpenseform = (props) =>{
    const [title, settitle] = useState("");
    const [amount, setamount] = useState('');
    const [date, setdate] =useState(new Date());

    const [viewForm, setViewForm] = useState(false);

    // const [data,setdata] = useState({
    //     title : "",
    //     amount :0,
    //     date :"",
         
    //     })

    const submitHandler = (event) =>{
        event.preventDefault();

        // const month = date.toLocaleString("en-us",{month: "long"});
        // const year = date.getFullYear();
        // const date = date.getDate();

        const dataobj = {
            id : Math.random(10).toString(  ),
            item : title,
            price : amount,
            date : new Date(date), 
        };
        // console.log(dataobj);

        settitle('');
        setamount('');
        setdate('');

        // sendData(dataobj);
        props.sendData(dataobj);
    }

    return(
        <div>
             <form className={viewForm ? 'D-Block' : 'D-None'} onSubmit={submitHandler}>
                 <div className="first_Item">
                <label>Title : </label>
                <input type="text" value={title} onChange={event => settitle (event.target.value)}/>
                {/* <input type="text" onChange={event => setdata ({...data, title:event.target.value})}/> */}
                </div>

                <div className="second_Item">
                <label>Amount : </label>
                <input type="number" value={amount} onChange={event => setamount(event.target.value)}/>
                {/* <input type="number" onChange={event => setdata ({...data, amount:event.target.value})}/> */}
                </div>

                <div className="third_Item">
                <label>Date : </label>
                <input type="Date" value={date} onChange={event => setdate(event.target.value)}/>
                {/* <input type="date" onChange={event => setdata ({...data, date:event.target.value})}/> */}
                </div>

                <div className="fourth_Item">
                    <button type="submit" onClick={e => setViewForm(!viewForm)}>Add Expense</button>
                </div>
                
            </form>

                <div className={!viewForm ? 'D-Block' : 'D-None'}>
                    <button onClick={e => setViewForm(!viewForm)}> Add New Expense</button>
                </div>
        </div>
           
        
    )
}

export default AddExpenseform;