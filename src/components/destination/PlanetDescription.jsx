



function PlanetDescription({currentPlanet}) {
 const moonDescription = "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
 const marsDescription = " Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest! "
 const europaDescription = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
 const titanDescription = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."

 const handlePlanetDescription = () => {
    if(currentPlanet == null || currentPlanet == "mars"){
        return marsDescription
    } else if (currentPlanet == "moon") {
        return moonDescription
    }else if (currentPlanet == "europa") {
        return europaDescription
    }else if (currentPlanet == "titan") {
        return titanDescription
    }
 }



    return(
        <p className="planet-description"> {handlePlanetDescription()} </p>
        
    )


}

export default PlanetDescription