import { useEffect, useState } from 'react'
import './App.css'
import LoadingPage from './pages/LoadingPage'
import HomePage from './pages/HomePage'
import MainNavigation from './routes/MainNavigation'
import AboutPage from './pages/AboutPage'
import NavBar from './components/NavBar'
import RecommendationModal from './components/RecommendationModal'


function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });


  useEffect(()=>{
    setTimeout(()=>setIsLoading(!isLoading ),5000) 
  },[])
  return (
    <>
    <div className="app">
      <div className="content">
        {/* {isLoading == true ? <LoadingPage/>:<MainNavigation/>} */}
    {/* <HomePage/> */}
    <MainNavigation/>
    {/* <LoadingPage/>  */}
    {/* <AboutPage/> */}
    {/* <RecommendationModal/> */}
      </div>
    </div>
    
    </>
  )
}

export default App
