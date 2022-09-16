import React from "react";
import './ChartList.css';

const ChartList = (props) => {

    let barHeight = "0%";
    if (props.maxValue > 0) {
        barHeight = Math.round((props.value / props.maxValue) * 100) + "%";
        console.log(barHeight)
    }

    return (
        <div className="chart_Bar">
            <div className="chart_Bar_Inner">
                <div className="chart_Bar_Fill" style={{ height: barHeight }}></div>
            </div>
            <div className="chart_Bar_Lable">{props.label}</div>
        </div>
    )
}

export default ChartList;