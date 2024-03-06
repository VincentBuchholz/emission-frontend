
import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
    const chartData = {
        labels: ['C40 Cities', 'Non-C40 Cities'],
        datasets: [
            {
                label: 'Average Emissions',
                backgroundColor: ['#36a2eb', '#ff6384'],
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: [data.avgEmissionsC40, data.avgEmissionsNonC40]
            }
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Average Emissions'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'City Type'
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

export default BarChart;