import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react'
import Nav from './component/Nav';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Work from './component/Work';
import Services from './component/Services';
import Registration from './component/Registration';
import Footer from './component/Footer';



const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
