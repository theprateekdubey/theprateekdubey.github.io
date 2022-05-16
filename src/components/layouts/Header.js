import React, { Component } from "react";
import { Link } from "react-scroll";

export default class Header extends Component {
  render() {
    return (
      <div className="bg-light fixed-top header-new">
        <header id="menu-jk" className="container-fluid">
          <div className="container">
            <div className="row head-ro">
              <div className="col-md-3 ">
                <img
                  style={{ width: "225px", padding: "7px 0 0 0" }}
                  src="assets/images/VitueCloud_Logo.png"
                  alt=""
                />

                <a
                  className="d-md-none small-menu"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <i className="fas d-lg-none  fa-bars"></i>
                </a>
              </div>
              <div id="collapseExample" className="col-md-9  nav">
                <ul>
                  <li>
                    <Link
                      activeclassname="active"
                      to="home"
                      spy={true}
                      smooth={true}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="about" spy={true} smooth={true}>
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link to="services" spy={true} smooth={true}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="blog" spy={true} smooth={true}>
                      Blog
                    </Link>
                  </li>

                  <li>
                    <a href="mailto:consult@virtucloud.io">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
