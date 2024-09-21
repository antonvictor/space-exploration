import PlanetInfo from "./PlanetInfo"
import PlanetDescription from "./PlanetDescription"



function PlanetDetails({currentPlanet}) {


    return(
        <div className="planet-details"> 
            <h1 id="planet-name">{currentPlanet? currentPlanet.toUpperCase() : "MARS"}</h1>
            <PlanetDescription currentPlanet ={currentPlanet}/> 
            <PlanetInfo currentPlanet ={currentPlanet}/>
        </div>

    )
}



export default PlanetDetails