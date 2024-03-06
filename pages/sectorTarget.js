import {useEffect, useState} from "react";
import emissionInfoFacade from "../facades/EmissionInfoFacade";
import React from 'react';
import {Table} from "react-bootstrap";
import TempScatterplot from "../components/TempScatterplot";
import AvgTargetBarplot from "../components/avgTargetBarplot";
import SectorBarplot from "../components/SectorBarplot";

export default function SectorTarget() {

    const [info, setInfo] = useState([]);


    useEffect(()=>{

        emissionInfoFacade.getReductionSectorInformation().then(i => setInfo(i))

    },[])


    return (
        <div>
            <h1>Sector Target</h1>
            <p>Average percentage reduction target for different sectors</p>

            {info.length > 0 &&
                <SectorBarplot data={info} />
            }
        </div>
    )
}