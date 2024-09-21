import firstMember from "../../assets/crew/image-douglas-hurley.png"
import secondMember from "../../assets/crew/image-mark-shuttleworth.png"
import thirdMember from "../../assets/crew/image-victor-glover.png"
import fourthMember from "../../assets/crew/image-anousheh-ansari.png"


function CrewMemberImage({currentCrewMember}) {
  
  
  const handleCrewImage = ()=> { 
    if (currentCrewMember === "firstMember") {
    return firstMember
   }else if (currentCrewMember === "secondMember"){
    return secondMember
   }else if (currentCrewMember === "thirdMember"){
    return thirdMember 
   }else if (currentCrewMember === "fourthMember"){
    return fourthMember
   }
} 



    return (
        <img src={handleCrewImage()} alt="" srcSet="" className="crew-img" />

    )
}




export default CrewMemberImage