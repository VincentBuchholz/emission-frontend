function emissionInfoFacade() {
    const URL = "/api/emission/"

    const getTemperatureEmissionInfo = async () => {
        const options = makeOptions("GET"); //True add's the token
        return await fetch(URL + "tempEmission", options).then(r => r.json());
    }
    const getAverageTargetInfoCountry = async () => {
        const options = makeOptions("GET"); //True add's the token
        return await fetch(URL + "countryAvgTarget", options).then(r => r.json());
    }

    const getAvgTargetInfo = async () => {
        const options = makeOptions("GET"); //True add's the token
        return await fetch(URL + "avgTarget", options).then(r => r.json());
    }

    const getReductionSectorInformation = async () => {
        const options = makeOptions("GET"); //True add's the token
        return await fetch(URL + "reductionSector", options).then(r => r.json());
    }

    const getAvgCountryEmissions = async () => {
        const options = makeOptions("GET"); //True add's the token
        return await fetch(URL + "countryAvgEmission", options).then(r => r.json());
    }

    const getCitiesWithCarbonNeutralTargets = async () => {
        const options = makeOptions("GET"); //True add's the token
        return await fetch(URL + "carbonNetutral", options).then(r => r.json());
    }

    const getAvgPerCitizenC40 = async () => {
        const options = makeOptions("GET"); //True add's the token
        return await fetch(URL + "avgCitizen", options).then(r => r.json());
    }

    const getLandAreaEmissionInfo = async () => {
        const options = makeOptions("GET"); //True add's the token
        return await fetch(URL + "landAreaEmission", options).then(r => r.json());
    }

    const getCityEmissionStatusInfo = async () => {
        const options = makeOptions("GET"); //True add's the token
        return await fetch(URL + "status", options).then(r => r.json());
    }



    const makeOptions = (method) => {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }
        return opts;
    }

    return{
        getLandAreaEmissionInfo,
        getCitiesWithCarbonNeutralTargets,
        getAvgCountryEmissions,
        getReductionSectorInformation,
        getTemperatureEmissionInfo,
        getAverageTargetInfoCountry,
        getAvgPerCitizenC40,
        getAvgTargetInfo,
        getCityEmissionStatusInfo,
    }
}



const facade = emissionInfoFacade();
export default facade;