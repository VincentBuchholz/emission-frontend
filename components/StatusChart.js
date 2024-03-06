import React from 'react';
import { Bar } from 'react-chartjs-2';

const StackedBarChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.year),
        datasets: [
            {
                label: 'Decreased',
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                data: data.map(item => item.decreased)
            },
            {
                label: 'Increased',
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                data: data.map(item => item.increased)
            }
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                stacked: false,
                title: {
                    display: true,
                    text: 'Count'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Year'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        }
    };

    return (
        <div style={{ height: '400px', width: '600px' }}>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default StackedBarChart;