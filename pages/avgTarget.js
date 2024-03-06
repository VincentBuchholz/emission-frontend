import {useEffect, useState} from "react";
import emissionInfoFacade from "../facades/EmissionInfoFacade";
import React from 'react';
import {Table} from "react-bootstrap";
import TempScatterplot from "../components/TempScatterplot";
import AvgTargetBarplot from "../components/avgTargetBarplot";

export default function AvgTarget() {

    const [info, setInfo] = useState([]);


    useEffect(()=>{

        emissionInfoFacade.getAvgTargetInfo().then(i => setInfo(i))

    },[])


    return (
        <div>
            <h1>Target</h1>
            <p>Average percentage reduction target for C40 cities and non C40 cities</p>

            {info.length > 0 &&
                <AvgTargetBarplot data={info} />
            }
        </div>
    )
}