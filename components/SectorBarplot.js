import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarPlot = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.sectorName),
        datasets: [
            {
                label: 'Average Reduction Target',
                backgroundColor: 'rgba(75,192,192,0.6)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                data: data.map(item => item.avgReductionTarget)
            }
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Average Reduction Target'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Sector Name'
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

export default BarPlot;