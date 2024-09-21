

function Dots({setCurrentCrewMember , currentCrewMember}) {
    return (
        <ul className="dots">
        <li className= {currentCrewMember == "firstMember"? "clicked-dot" : "dot"} onClick={()=>{ setCurrentCrewMember("firstMember")}}><button></button></li>
        <li className= {currentCrewMember == "secondMember"? "clicked-dot" : "dot"} onClick={()=>{ setCurrentCrewMember("secondMember")}}><button></button></li>
        <li className= {currentCrewMember == "thirdMember"? "clicked-dot" : "dot"} onClick={()=>{ setCurrentCrewMember("thirdMember")}}><button></button></li>
        <li className= {currentCrewMember == "fourthMember"? "clicked-dot" : "dot"} onClick={()=>{ setCurrentCrewMember("fourthMember")}}><button></button></li>
     </ul>
    )
}


export default Dots