import React from 'react'
import RoundCard from '../components/RoundCard'
import { RoundCardProp } from '../types/type'
import NavBar from '../components/NavBar'



const ProjectsPage = () => {
  
  return (
    <div className="aboutmepage">
      <div className="aboutmepage-navbar">
        <NavBar/>
      </div>
    <div className="aboutme-outer">
      <div className="heading">
        <h1 style={{color:'black', marginLeft:'80px'}}>PRO</h1>
        <h1 style={{color:'#D7D7D7'}}>JECTS</h1> 
       </div>
      <div className="aboutme-inner">
        <RoundCard componentName = 'projects'/>
      </div>
    </div>
    </div>
  )
}

export default ProjectsPage