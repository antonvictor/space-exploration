import Home from './home/Home'
import Technology from './technology/Technology'
import Crew from './crew/Crew'
import Destination from './destination/Destination'



function PageContent({currentPage , setCurrentPage}) {

    const handlePage = () =>{
        if (!currentPage || currentPage == "home") {
         return <Home setCurrentPage= {setCurrentPage}/>
        }else if (currentPage == "destination"){
         return <Destination/>
        }else if (currentPage == "crew"){
         return <Crew/>
        }else if (currentPage == "technology"){
         return <Technology/>
        }
       }

    return (
<>
{handlePage()}
</>

    )
}



export default PageContent