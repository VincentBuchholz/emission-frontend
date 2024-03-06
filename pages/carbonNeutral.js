import {useEffect, useState} from "react";
import emissionInfoFacade from "../facades/EmissionInfoFacade";
import React from 'react';
import {Table} from "react-bootstrap";
import TempScatterplot from "../components/TempScatterplot";
import AvgTargetBarplot from "../components/avgTargetBarplot";

export default function CarbonNeutral() {

    const [info, setInfo] = useState([]);


    useEffect(()=>{

        emissionInfoFacade.getCitiesWithCarbonNeutralTargets().then(i => setInfo(i))

    },[])


    return (
        <div>
            <h1>Cities With 100% Reduction Targets</h1>
            <p>Countries and their average emissions</p>

            {info.length > 0 &&
                <Table className="table-striped  table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>City</th>
                        <th>Target Year</th>
                    </tr>
                    </thead>
                    <tbody>
                    {info.sort((a, b) =>   a.targetYear - b.targetYear).map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.city}</td>
                            <td>{item.targetYear}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            }
        </div>
    )
}