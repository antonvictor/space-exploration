import { useState } from "react";
import CrewMember from "./CrewMember";
import Dots from "./Dots";

function Crew() {


  const [currentCrewMember , setCurrentCrewMember] = useState("firstMember")




  return (
    <>
      <div id="crew-head">Meet Your Crew</div>
      <CrewMember currentCrewMember ={currentCrewMember}/>
      <Dots currentCrewMember ={currentCrewMember} setCurrentCrewMember ={setCurrentCrewMember}></Dots>
    </>
  );
}

export default Crew;
