import React from 'react';
import { Bar } from 'react-chartjs-2';

const AvgTargetBarplot = ({ data }) => {
    const chartData = {
        labels: data.map((item, index) => item.c40? "C40":"Non C40"), // Generate dynamic labels
        datasets: [
            {
                label: 'Average Target',
                backgroundColor: data.map(item => item.c40 ? 'rgba(255, 99, 132, 0.6)' : 'rgba(54, 162, 235, 0.6)'), // Dynamic color based on 'c40' value
                borderColor: data.map(item => item.c40 ? 'rgba(255, 99, 132, 1)' : 'rgba(54, 162, 235, 1)'),
                borderWidth: 1,
                data: data.map(item => item.avgTarget) // Dynamic data
            }
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Average Percentage reduction Target'
                }
            },
            x: {
                title: {
                    display: false,
                    text: 'Data'
                }
            }
        }
    };

    return (
        <div style={{ height: '400px', width: '600px' }}>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default AvgTargetBarplot;
