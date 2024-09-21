import CrewMemberImage from "./CrewMemberImage";
import MemberTitle from "./MemberTitle";
import MemeberName from "./MemberName";
import MemeberBio from "./MemberBio";




function CrewMember({currentCrewMember}) {


    return ( 
    <div className="crew-member">
    <div className="crew-details">
        <MemberTitle currentCrewMember ={currentCrewMember}/>
        <MemeberName currentCrewMember ={currentCrewMember}/>
        <MemeberBio currentCrewMember ={currentCrewMember}/>
    </div>
 <CrewMemberImage currentCrewMember={currentCrewMember}/>
  </div>
  )
}




export default CrewMember