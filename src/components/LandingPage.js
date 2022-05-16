import React, { Component } from "react";
import About from "./About";
import Blog from "./Blog";
import Home from "./home/Home";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Services from "./Services";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <About />
        <Services />
        <Blog />
        <Footer />
      </div>
    );
  }
}
