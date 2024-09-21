import { useState } from 'react'
import Header from './components/Header'
import BackgroundImage from './components/Backgroundimage'
import PageContent from './components/PageContent'


function App() {
   
  const [currentPage , setCurrentPage] = useState("home")


 



  return (
    <>
    <Header  setCurrentPage = {setCurrentPage} currentPage = {currentPage} />
    <BackgroundImage currentPage = {currentPage}/>
    <PageContent setCurrentPage = {setCurrentPage} currentPage = {currentPage} />
    </>
  ) 
}

export default App
