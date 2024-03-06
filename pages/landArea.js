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
import LandBarchart from "../components/LandBarchart";

export default function LandArea() {
    ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

    const [info, setInfo] = useState([]);


    useEffect(()=>{

        emissionInfoFacade.getLandAreaEmissionInfo().then(i => setInfo(i))

    },[])


    return (
        <div>
            <h1>Land Area Emission</h1>
            <p>Correlation between land area and city emissions</p>

            {info.length > 0 &&
            <LandBarchart data={info} />
            }
        </div>
    )
}