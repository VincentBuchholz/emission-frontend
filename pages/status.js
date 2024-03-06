import {useEffect, useState} from "react";
import emissionInfoFacade from "../facades/EmissionInfoFacade";
import React from 'react';
import {Table} from "react-bootstrap";
import TempScatterplot from "../components/TempScatterplot";
import AvgTargetBarplot from "../components/avgTargetBarplot";
import StatusChart from "../components/StatusChart";

export default function Status() {

    const [info, setInfo] = useState([]);


    useEffect(()=>{

        emissionInfoFacade.getCityEmissionStatusInfo().then(i => setInfo(i))

    },[])


    return (
        <div>
            <h1>Status</h1>
            <p>Status of cities emissions based on previous year</p>

            {info.length > 0 &&
                <StatusChart data={info} />
            }
        </div>
    )
}