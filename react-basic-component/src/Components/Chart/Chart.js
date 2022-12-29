import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaxValue = Math.max(...dataPointValues);
    console.log(totalMaxValue)

    return (
        <div className="chart">
            {props.dataPoints.map(datapoint =>
                <ChartBar 
                    key={datapoint.label}
                    value={datapoint.value}
                    maxValue={totalMaxValue}    
                    label={datapoint.label}
                />
            )}
        </div>
    );
};

export default Chart;