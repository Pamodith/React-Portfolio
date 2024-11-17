import { useEffect, useState } from 'react'
import './App.css'
import LoadingPage from './pages/LoadingPage'
import MainNavigation from './routes/MainNavigation'



function App() {
  const [isLoading, setIsLoading] = useState(true)


  useEffect(()=>{
    setTimeout(()=>setIsLoading(!isLoading ),5000) 
  },[])
  return (
    <>
    <div className="app">
      <div className="content">
        {/* {isLoading == true ? <LoadingPage/>:<MainNavigation/>} */}
  
    
        <MainNavigation/>
      </div>
    </div>
    
    </>
  )
}

export default App
