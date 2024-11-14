// MainNavigation.tsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectsPage from '../pages/ProjectsPage';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import ReviewsPage from '../pages/ExperiencePage';
import SideGigs from '../pages/SideGigs';

const MainNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/about-me' element={<AboutPage />} />
        <Route path='/contact-me' element={<ContactPage />} />
        <Route path='/experience' element={<ReviewsPage />} />
        <Route path='/side-gigs' element={<SideGigs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainNavigation
