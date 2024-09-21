

function MemeberName({currentCrewMember}) {
    const handleMemberName = () => {
        if (currentCrewMember === "firstMember") {
          return "DOUGLAS HURLEY";
        } else if (currentCrewMember === "secondMember") {
          return "MARK SHUTTLEWORTH";
        } else if (currentCrewMember === "thirdMember") {
          return "VICTOR GLOVER";
        } else if (currentCrewMember === "fourthMember") {
          return "ANOUSHEH ANSARI";
        }
      };


    return  <h1 className="member-name">{handleMemberName()}</h1>

}               





export default MemeberName