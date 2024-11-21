import RoundCard from '../components/RoundCard'
import NavBar from '../components/NavBar'
import '../assets/styles/sass/projects/_projects.scss'
const ProjectsPage = () => {
  
  return (
    <div className="Projectspage">
      <div className="Projectspage-navbar">
        <NavBar/>
      </div>
    <div className="Projects-outer">
      <div className="heading">
        <h1>Projects</h1>
       </div>
      <div className="Projects-inner">
        <RoundCard componentName = 'projects'/>
      </div>
    </div>
    </div>
  )
}

export default ProjectsPage