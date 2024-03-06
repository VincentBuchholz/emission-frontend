import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AvgCitizen from "./avgCitizen";
import AvgTarget from "./avgTarget";
import CarbonNeutral from "./carbonNeutral";
import CountryAvg from "./countryAvg";
import CountryTarget from "./countryTarget";
import LandArea from "./landArea";
import SectorTarget from "./sectorTarget";
import Status from "./status";
import TempEmission from "./tempEmission";

export default function Home() {
  return (
    <div className={"container"}>
        <AvgCitizen/>
        <AvgTarget/>
        <CarbonNeutral/>
        <CountryAvg/>
        <CountryTarget/>
        <LandArea/>
        <SectorTarget/>
        <Status/>
        <TempEmission/>
    </div>
  )
}
