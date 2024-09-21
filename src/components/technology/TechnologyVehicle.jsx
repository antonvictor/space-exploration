





function TechnologyVehicle({technologyPage}) {

  const  handleVehicleName = () => {
if (technologyPage == "first") {
return "LAUNCH VEHICLE"
}else if ( technologyPage == "second") {
return "SPACE PORT"
}else if (technologyPage == "third") {
return "SPACE CAPSULE"
} 
    }

    return <h1 className="technology-vehicle">{handleVehicleName()}</h1>

}




export default TechnologyVehicle