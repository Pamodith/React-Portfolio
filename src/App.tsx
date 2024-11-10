import { useEffect, useState } from 'react'
import './App.css'
import LoadingPage from './pages/LoadingPage'
import HomePage from './pages/HomePage'
import MainNavigation from './routes/MainNavigation'


function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  useEffect(()=>{
    setTimeout(()=>setIsLoading(!isLoading ),5000) 
  },[])
  return (
    <>
    <div className="app">
      <div
        className="light-cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      ></div>
      <div className="content">
        {isLoading == true ? <LoadingPage/>:<MainNavigation/>}
    {/* <HomePage/> */}
    {/* <MainNavigation/> */}
    {/* <LoadingPage/>  */}
      </div>
    </div>
    
    </>
  )
}

export default App
