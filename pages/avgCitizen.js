import {useEffect, useState} from "react";
import emissionInfoFacade from "../facades/EmissionInfoFacade";
import React from 'react';
import {Table} from "react-bootstrap";
import TempScatterplot from "../components/TempScatterplot";
import AvgTargetBarplot from "../components/avgTargetBarplot";
import CitizenBarchart from "../components/CitizenBarchart";

export default function AvgCitizen() {

    const [info, setInfo] = useState({});


    useEffect(()=>{

        emissionInfoFacade.getAvgPerCitizenC40().then(i => setInfo(i))

    },[])


    return (
        <div>
            <h1>Average Emissions per citizen</h1>

            {info &&
                <CitizenBarchart data={info} />
            }
        </div>
    )
}