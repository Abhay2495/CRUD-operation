import React from "react";
import './Chart.css';
import ChartList from "./ChartList";

const Chart = (props) => {
console.log(props.filterRecord);

let chartDataPoint = [
    {label : "Jan", price : 0},
    {label : "Feb", price : 0},
    {label : "Mar", price : 0},
    {label : "Apr", price : 0},
    {label : "May", price : 0},
    {label : "Jun", price : 0},
    {label : "Jul", price : 0},
    {label : "Aug", price : 0},
    {label : "Sep", price : 0},
    {label : "Oct", price : 0},
    {label : "Nov", price : 0},
    {label : "Dec", price : 0},
];

    for (let record of props.filterRecord) {
        let month = record.date.getMonth();
       chartDataPoint[month].price += record.price;
    }

    const priceArray = props.filterRecord.map(changing => changing.price);

    let maxPrice = Math.max(...priceArray); 

    return( 
        <div className="Chart">
            {
                chartDataPoint.map((record) => {
                    return(
                        <ChartList label = {record.label} value = {record.price} maxValue = {maxPrice}/>
                    )
                })
            }
        </div>
    )
}

export default Chart;    