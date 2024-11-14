import React from 'react'
import RoundCard from '../components/RoundCard'
import NavBar from '../components/NavBar'
import '../assets/styles/sass/contactme/_contactme.scss'

const ContactPage = () => {
  return (
    <div className="contactmepage">
      <div className="contactmepage-navbar">
        <NavBar/>
      </div>
    <div className="contactme-outer">
      <div className="heading">
        <h1 style={{color:'black'}}>Send me a</h1>
        <h1 style={{color:'#D7D7D7'}}>n email !!</h1> 
       </div>
      <div className="contactme-inner">
        <RoundCard componentName = 'contact'/>
      </div>
    </div>
    </div>
  )
}

export default ContactPage