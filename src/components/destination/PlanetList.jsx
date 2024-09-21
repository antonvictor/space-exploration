






function PlanetList({setCurrentPlanet ,currentPlanet}) {

    return(
            <ul className="planet-list">
                <li><button className={currentPlanet== "moon"? "clicked" : null} onClick={ () =>{setCurrentPlanet("moon")}}>Moon</button></li>
                <li><button className={currentPlanet== "mars"? "clicked" : null} onClick={ () => {setCurrentPlanet("mars")}}>Mars</button></li>
                <li><button className={currentPlanet== "europa"? "clicked" : null} onClick={ () => {setCurrentPlanet("europa")}}>Europa</button></li>
                <li><button className={currentPlanet== "titan"? "clicked" : null} onClick={ () => {setCurrentPlanet("titan")}}>Titan</button></li>
            </ul>

    )
}






export default PlanetList