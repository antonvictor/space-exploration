
function Navbar({setCurrentPage , currentPage}) {

    


    return (
        <ul className="navbar">
            <li><button className={currentPage == "home" || currentPage == null? "clicked" : null} onClick={() => {setCurrentPage("home")}}>Home</button></li>
            <li><button className={currentPage == "destination" ? "clicked" : null} onClick={() => {setCurrentPage("destination")}}>Destination</button></li>
            <li><button className={currentPage == "crew" ? "clicked" : null} onClick={() => {setCurrentPage("crew")}}>Crew</button></li>
            <li><button className={currentPage == "technology" ? "clicked" : null} onClick={() => {setCurrentPage("technology")}}>Technology</button></li>
        </ul>
    )
}



export default Navbar