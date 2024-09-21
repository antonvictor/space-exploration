import { useState } from "react";
import TechnologyPages from "./TechnologyPages";
import TechnologyVehicle from "./TechnologyVehicle";
import VehicleDescription from "./VehicleDescription";
import VehicleImage from "./VehicleImage";



function Technology() {

   const [technologyPage , setTechnologyPage] = useState("first")






  return (
    <>
      <div id="technology-head">Space Launch 101</div>
      <div className="technology-content">
        <TechnologyPages technologyPage = {technologyPage} setTechnologyPage= {setTechnologyPage}/>
        <div className="technology-info">
          <h2 id="technology-info-title">THE TERMINOLOGY...</h2>
          <TechnologyVehicle technologyPage ={technologyPage}/>
          <VehicleDescription technologyPage ={technologyPage}/>
        </div>
        <VehicleImage technologyPage ={technologyPage}/>
      </div>
    </>
  );
}

export default Technology;
