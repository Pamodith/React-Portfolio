import React from 'react'
import "../assets/styles/sass/availability/_availability.scss"

const Availability = () => {
const date = new Date();
  return (
    <>
    <div className="availability-outer">
            {/* <div className="availability-inner">Check My Availability */}
            <div className="availability-inner-up">
            {`${date.getDate()}*`}
            </div> 
            <div className="availability-inner-down">
            I’m in the zone and free today. Let’s brainstorm!
            </div> 
            {/* </div> */}
          </div></>
  )
}

export default Availability