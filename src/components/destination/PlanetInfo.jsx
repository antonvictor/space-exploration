import FirstInfo from "./FirstInfo"
import SecondInfo from "./SecondInfo"


function PlanetInfo({currentPlanet}) {




    return (
        <div className="planet-additional-info">
        <FirstInfo currentPlanet ={currentPlanet}/>
        <SecondInfo currentPlanet ={currentPlanet}/>
        </div>
    )
}



export default PlanetInfo