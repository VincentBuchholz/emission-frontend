import React from 'react';
import { Scatter } from 'react-chartjs-2';

const TempScatterplot = ({ dataset }) => {
    const data = {
        datasets: [{
            label: 'City Emissions',
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            data: dataset.map(city => ({
                x: city.avgAnnualTemp,
                y: city.totalEmissions,
                cityName: city.cityName
            }))
        }]
    };

    const options = {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Average Annual Temperature (°C)'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Total Emissions'
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const dataPoint = context.dataset.data[context.dataIndex];
                        return `${dataPoint.cityName}: (${dataPoint.x}°C, ${dataPoint.y})`;
                    }
                }
            }
        }
    };

    return (
        <div style={{ height: '600px', width: '800px' }}>
            <Scatter data={data} options={options} />
        </div>
    );
};

export default TempScatterplot;