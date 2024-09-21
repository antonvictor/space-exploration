


function FirstInfo({currentPlanet}) {
   const marsDistance = "225 Mil. KM"
   const moonDistance = "384,400 KM"
   const europaDistance = "628 MIL. KM"
   const titanDistance = "1.6 BIL. KM"

   const handlePlanetDistance = () => {
    if(currentPlanet == null || currentPlanet == "mars"){
        return marsDistance
    } else if (currentPlanet == "moon") {
        return moonDistance
    }else if (currentPlanet == "europa") {
        return europaDistance
    }else if (currentPlanet == "titan") {
        return titanDistance
    }
 }



    return(

        <div className="planet-additional-info-box">      
        <p className="planet-additional-info-head">AVG. Distance</p>
        <h2 className="planet-additional-info-content">  {handlePlanetDistance()}   </h2>
    </div>

    )
}


export default FirstInfo