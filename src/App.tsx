import { useEffect, useState } from 'react'
import './App.css'
import LoadingPage from './pages/LoadingPage'
import HomePage from './pages/HomePage'
import MainNavigation from './routes/MainNavigation'


function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>setIsLoading(!isLoading ),5000) 
  },[])
  return (
    <>
    
    {/* {isLoading == true ? <LoadingPage/>:<MainNavigation/>} */}
    {/* <HomePage/> */}
    <MainNavigation/>
    {/* <LoadingPage/>  */}
    </>
  )
}

export default App
