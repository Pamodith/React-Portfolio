import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import ProjectsPage from '../pages/ProjectsPage';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import ReviewsPage from '../pages/ExperiencePage';
import SideGigs from '../pages/SideGigs';
import { AnimatePresence } from 'framer-motion';

const MainNavigation = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation(); // Correctly used inside BrowserRouter context

  return (
    <AnimatePresence mode="wait"> {/* Ensures smooth exit and entry animations */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about-me" element={<AboutPage />} />
        <Route path="/contact-me" element={<ContactPage />} />
        <Route path="/experience" element={<ReviewsPage />} />
        <Route path="/side-gigs" element={<SideGigs />} />
      </Routes>
    </AnimatePresence>
  );
};

export default MainNavigation;
