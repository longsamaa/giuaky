import React, { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';

const ChartVN = () => {
    const [listDate, setlistDate] = useState([]);
    const infectionColor = 'red'; 
    const doubtColor = 'violet'; 
    const curedColor = 'green'; 
    const distanceLabel = 6; 
    let arrKeys = [];
    useEffect(() => {
        fetch("https://td.fpt.ai/corona/corona-chart-vn.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setlistDate(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, []);
    arrKeys = Object.keys(listDate);
    return <div className = "chart-card">
        <h1>Biểu đồ bệnh nhân nhiễm covid ở Việt Nam</h1>
        <Line
            options={{
                responsive: true
            }}
            data={{
                labels: arrKeys.map((key,index) => (index % distanceLabel === 0 || index === arrKeys.length - 1) ? key : ''),
                datasets: [{
                    data: arrKeys.map(key => listDate[key][0]),
                    label: "Số bệnh nhân nhân nhiễm bệnh",
                    borderColor: infectionColor,
                    fill: true
                },{
                    data: arrKeys.map(key => listDate[key][1]),
                    label: "Số bệnh nhân nghi nhiễm",
                    borderColor: doubtColor,
                    fill: true
                },{
                    data: arrKeys.map(key => listDate[key][2]),
                    label: "Số bệnh nhân khỏi bệnh",
                    borderColor: curedColor,
                    fill: true
                }]
            }
            }
        />
    </div>
}

export default ChartVN; 