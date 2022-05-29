import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
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
      <Router>
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
      </Router>
    );
  } 
/* const Header = ReactDOM.createRoot(
  document.getElementById("root")
);

Header.render(
  <BrowserRouter>
      <header>
        <Navigation />
      </header>
    <Routes>
      <Route exact path="/" element={<About />} />
            <Route path="/About" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio/>} />
            <Route path="/Contact" element={<Contact />}/>
            <Route path="/resume" element={<Resume />}/>
    </Routes>
  </BrowserRouter>
); */

export default Header;