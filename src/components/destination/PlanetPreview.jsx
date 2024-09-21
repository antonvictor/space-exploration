import PlanetImg from "./PlanetImg"
import PlanetList from "./PlanetList"
import PlanetDetails from "./PlanetDetails"




function PlanetPreview({currentPlanet , setCurrentPlanet}) {


    return (
        <div className="planet-preview-panel"> 
        <PlanetImg currentPlanet ={currentPlanet}/>
    <div>
        <PlanetList setCurrentPlanet= {setCurrentPlanet} currentPlanet ={currentPlanet} />
        <PlanetDetails currentPlanet ={currentPlanet} />
    </div>
    </div>
    )
}



export default PlanetPreview