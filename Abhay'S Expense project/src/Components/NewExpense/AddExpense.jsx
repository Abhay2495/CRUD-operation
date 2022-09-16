import React from "react";
import "./AddExpense.css";
import Addexpenseform from "./AddExpenseform"

// const AddExpense = (props) => {
const AddExpense = ({sendDataApp}) => {
    // const [hide] = useState();
    // const [hidebutt, sethidebutt] = useState('Add New Expense');


    // const hideHolder = () =>{
    //     sethidebutt(<Addexpenseform/>);
    // }

    const getAddExpenseForm = (dataobj) =>{
        // alert('Hi from Abhii');
        // console.log(dataobj);
          // props.sendDataApp(dataobj);
        sendDataApp(dataobj);
    }  

    return(<div className="out_box">
        {/* <div className="aline_Box">
            <button className="click_butt" onClick={hideHolder}>{hidebutt}</button>
        </div> */}
        {/* <div>
            {hide}
        </div> */}
         <Addexpenseform sendData ={getAddExpenseForm}/>
    </div>
    )
}
export default AddExpense