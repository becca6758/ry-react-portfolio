import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Navigation from "./Navigation";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";



function Header() {
    return (
      <BrowserRouter>
        <header>
          <Navigation />
        </header>

        <div className="content">
          <Routes>
            <Route path="/" element= {<About/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/resume" element={<Resume/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
  } 

export default Header;