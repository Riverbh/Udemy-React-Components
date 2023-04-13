import React from "react";

import './Chart.css'
import ChartBar from "./ChartBar";

const Chart = (props) => {

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => 
            <ChartBar 
                key={datePoint.label}
                value={datePoint.value} 
                maxValue={null}
                label={dataPoint.label}
            />)}
        </div>
    )
}

export default Chart