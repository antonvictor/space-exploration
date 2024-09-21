



function TechnologyPages({technologyPage , setTechnologyPage}) {





    return (        <ul className="technology-dots">
        <li className={technologyPage == "first" ?  "clicked-technology-dot"  : "technology-dot"}>
          <button onClick={ () => {setTechnologyPage("first")}}>1</button>
        </li>
        <li className={technologyPage == "second" ?  "clicked-technology-dot"  : "technology-dot"}>
          <button onClick={ () => {setTechnologyPage("second")}}>2</button>
        </li>
        <li className={technologyPage == "third" ?  "clicked-technology-dot"  : "technology-dot"}>
          <button onClick={ () => {setTechnologyPage("third")}}>3</button>
        </li>
      </ul>)
}




export default TechnologyPages