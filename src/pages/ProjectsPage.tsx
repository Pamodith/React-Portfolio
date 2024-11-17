import RoundCard from '../components/RoundCard'
import NavBar from '../components/NavBar'
const ProjectsPage = () => {
  
  return (
    <div className="aboutmepage">
      <div className="aboutmepage-navbar">
        <NavBar/>
      </div>
    <div className="aboutme-outer">
      <div className="heading">
        <h1 style={{color:'#31473A', marginLeft:'80px'}}>Pro</h1>
        <h1 style={{color:'#EDF4F2'}}>jects</h1> 
       </div>
      <div className="aboutme-inner">
        <RoundCard componentName = 'projects'/>
      </div>
    </div>
    </div>
  )
}

export default ProjectsPage