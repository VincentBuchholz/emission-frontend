import {useEffect, useState} from "react";
import emissionInfoFacade from "../facades/EmissionInfoFacade";
import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import TempScatterplot from "../components/TempScatterplot";

export default function TempEmission() {
    ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

    const [info, setInfo] = useState([]);


    useEffect(()=>{

        emissionInfoFacade.getTemperatureEmissionInfo().then(i => setInfo(i))

    },[])


    return (
        <div>
            <h1>Temperature Emission</h1>
            <p>Correlation between temperature and city emissions</p>

            {info.length > 0 &&
            <TempScatterplot dataset={info} />
            }
        </div>
    )
}