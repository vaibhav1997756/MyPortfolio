import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Homepage from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Tech from './components/TechStack/TechStack';
import ContactUs from './components/Contact/Contact';
import Navbar from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/techstack" element={<Tech />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>

  );
}

export default App;
