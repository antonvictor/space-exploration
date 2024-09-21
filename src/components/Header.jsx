import Logo from "./Logo"
import Navbar from "./Navbar"





function Header({setCurrentPage , currentPage}) {


 return(
<div className="header">
<Logo setCurrentPage ={setCurrentPage}/>
<Navbar setCurrentPage ={setCurrentPage }  currentPage= {currentPage}/>
</div>
)
}



export default Header