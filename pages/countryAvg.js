import {useEffect, useState} from "react";
import emissionInfoFacade from "../facades/EmissionInfoFacade";
import React from 'react';
import {Table} from "react-bootstrap";

export default function CountryAvg() {

    const [info, setInfo] = useState([]);


    useEffect(()=>{

        emissionInfoFacade.getAvgCountryEmissions().then(i => setInfo(i))

    },[])


    return (
        <div>
            <h1>Country Average Emissions</h1>
            <p>Countries and their average emissions</p>

            {info.length > 0 &&
                <Table className="table-striped  table-bordered table-hover">
                <thead>
                <tr>
                <th>#</th>
                <th>Country</th>
                <th>Average Emissions</th>
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