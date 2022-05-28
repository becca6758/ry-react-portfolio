import React, { Component } from "react";
import { Routes, HashRouter } from "react-router-dom";
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
          <Routes exact path="/" component={About} />
          <Routes path="/about" component={About} />
          <Routes path="/portfolio" component={Portfolio} />
          <Routes path="/contact" component={Contact}/>
          <Routes path="/resume" component={Resume}/>
        </div>
      </HashRouter>
    );
  }
}

export default Header;