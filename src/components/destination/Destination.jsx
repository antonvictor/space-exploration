import { useState } from "react"
import PlanetPreview from "./PlanetPreview"







function Destination() {

    const [currentPlanet , setCurrentPlanet] = useState("mars")



    return (
        <>
        <h1 id="destination-head"> Pick Your Destination</h1>
        <PlanetPreview currentPlanet= {currentPlanet} setCurrentPlanet= {setCurrentPlanet}/>
        </>

    )
}




export default Destination