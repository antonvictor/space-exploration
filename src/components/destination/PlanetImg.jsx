import mars from "../../assets/destination/image-mars.png"
import moon from "../../assets/destination/image-moon.png"
import europa from "../../assets/destination/image-europa.png"
import titan from "../../assets/destination/image-titan.png"



function PlanetImg({currentPlanet}) {

const handlePlanetImg = () => {

    if(currentPlanet == null || currentPlanet == "mars"){
        return mars
    } else if (currentPlanet == "moon") {
        return moon
    }else if (currentPlanet == "europa") {
        return europa
    }else if (currentPlanet == "titan") {
        return titan
    }

}


    return(
        <img className="planet-img"  src={handlePlanetImg()} alt="" />

    )
}



export default PlanetImg