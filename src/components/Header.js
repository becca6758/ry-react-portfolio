import React, { Component } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Navigation from "./Navigation";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";



class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          <Navigation />
        </header>

        <div className="content">
          <Routes>
            <Route exact path="/" render={About} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact}/>
            <Route path="/resume" component={Resume}/>
          </Routes>
        </div>
      </HashRouter>
    );
  }
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