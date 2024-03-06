import React from 'react';
import { Scatter } from 'react-chartjs-2';

const ScatterPlot = ({ data }) => {
    const chartData = {
        datasets: [
            {
                label: 'Land Area vs Emissions',
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                data: data.map(item => ({ x: item.landArea, y: item.emissions }))
            }
        ]
    };

    const options = {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Land Area'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Emissions'
                }
            }
        }
    };

    return (
        <div style={{ height: '600px', width: '800px' }}>
            <Scatter data={chartData} options={options} />
        </div>
    );
};

export default ScatterPlot;