




function MemberTitle({ currentCrewMember }) {


  const handleMemberTitle = () => {
    if (currentCrewMember === "firstMember") {
      return "COMMANDER";
    } else if (currentCrewMember === "secondMember") {
      return "MISSION SPECIALIST";
    } else if (currentCrewMember === "thirdMember") {
      return "PILOT";
    } else if (currentCrewMember === "fourthMember") {
      return "FLIGHT ENGINEER";
    }
  };




  return <h2 className="member-title">{handleMemberTitle()}</h2>;
}






export default MemberTitle;
