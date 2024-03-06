import {useEffect, useState} from "react";
import emissionInfoFacade from "../facades/EmissionInfoFacade";
import React from 'react';
import {Table} from "react-bootstrap";

export default function CountryTarget() {

    const [info, setInfo] = useState([]);


    useEffect(()=>{

        emissionInfoFacade.getAverageTargetInfoCountry().then(i => setInfo(i))

    },[])


    return (
        <div>
            <h1>Country Average Targets</h1>
            <p>Countries and their average percentage reduction targets</p>

            {info.length > 0 &&
                <Table className="table-striped  table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Country</th>
                        <th>Average Percentage Reduction Targets</th>
                    </tr>
                    </thead>
                    <tbody>
                    {info.sort((a, b) => b.avgEmissions - a.avgEmissions).map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.countryName}</td>
                            <td>{item.avgEmissions}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            }
        </div>
    )
}