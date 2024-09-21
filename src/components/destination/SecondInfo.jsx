



function SecondInfo({currentPlanet}) {
    const marsTravelTime = "225 Mil. KM"
    const moonTravelTime = "3 DAYS"
    const europaTravelTime = "3 YEARS"
    const titanTravelTime = "7 YEARS"

    const handlePlanetTravelTime = () => {
        if(currentPlanet == null || currentPlanet == "mars"){
            return marsTravelTime
        } else if (currentPlanet == "moon") {
            return moonTravelTime
        }else if (currentPlanet == "europa") {
            return europaTravelTime
        }else if (currentPlanet == "titan") {
            return titanTravelTime
        }
     }



    return (
        <div className="planet-additional-info-box">      
        <p className="planet-additional-info-head">Est. Travel Time</p>
        <h2 className="planet-additional-info-content">{handlePlanetTravelTime()}</h2>
        </div>
    )
}



export default SecondInfo