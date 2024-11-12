import React from 'react'
import RoundCard from '../components/RoundCard'

const ContactPage = () => {
  return (
    <div className="aboutme-outer">
      {/* <NavBar/> */}
      <h1 className="heading">
        Contact Me 
       </h1>
      <div className="aboutme-inner">
        <RoundCard componentName = 'contact'/>
      </div>
    </div>
  )
}

export default ContactPage