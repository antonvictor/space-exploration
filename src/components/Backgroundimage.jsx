import homeBackground from "../assets/home/background-home-desktop.jpg"
import destinationBackground from "../assets/destination/background-destination-desktop.jpg"
import crewBackground from "../assets/crew/background-crew-desktop.jpg"
import technologyBackground from "../assets/technology/background-technology-desktop.jpg"



function Backgroundimage({currentPage}) {
let background
if (currentPage == null || currentPage == "home") {
    background = homeBackground
}else if (currentPage == "destination"){
background = destinationBackground
}else if (currentPage == "crew") {
background = crewBackground
}else if( currentPage == "technology"){
    background = technologyBackground
}


    return(
        <>
        <img  className="background-image" src={background} alt="" srcSet="" />
        </>
    )
}





export default Backgroundimage