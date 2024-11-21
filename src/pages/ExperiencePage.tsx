import NavBar from '../components/NavBar'
import RoundCard from '../components/RoundCard'
import '../assets/styles/sass/experience/_experience.scss'

const ExperiencePage = () => {
  return (
    <div className="experiencepage">
      <div className="experiencepage-navbar">
        <NavBar/>
      </div>
    <div className="experience-outer">
      <div className="heading">
        <h1>Experience</h1>
        
       </div>
      <div className="experience-inner">
        <RoundCard componentName = 'experience'/>
      </div>
    </div>
    </div>
  )
}

export default ExperiencePage