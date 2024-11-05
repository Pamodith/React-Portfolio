import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProjectsPage from '../pages/ProjectsPage'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import ReviewsPage from '../pages/ReviewsPage'
import SideGigs from '../pages/SideGigs'


const MainNavigation = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/projects' Component={ProjectsPage}/>
        <Route path='/about-me' Component={AboutPage}/>
        <Route path='/contact-me' Component={ContactPage}/>
        <Route path='/reviews' Component={ReviewsPage}/>
        <Route path='/side-gigs' Component={SideGigs}/>  
    </Routes>
    </BrowserRouter>
  )
}

export default MainNavigation