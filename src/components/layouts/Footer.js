import React, { Component } from "react";
import { Link } from "react-scroll/modules";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-new">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-5 about">
                <h2 className="text-white">About Us</h2>
                <p>
                  We have a team of DevOps which are proficient in different
                  tools & services which are aligned to meet your business goals
                  quickly & cost effective.
                </p>

                <div className="foot-address">
                  <div className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="addet">Banglore Karnatak , India</div>
                </div>
                <div className="foot-address">
                  <div className="icon">
                    <i className="far fa-envelope-open"></i>
                  </div>
                  <div className="addet">consult@virtucloud.io</div>
                </div>
                <div className="foot-address">
                  <div className="icon">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <div className="addet">+23 323 43434</div>
                </div>
              </div>
              <div className="col-md-5 glink">
                <ul className="nav">
                  <li>
                    <Link to="home" spy={true} smooth={true}>
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
              <div className="col-md-2 tags">
                <img
                  style={{ width: "225px", padding: "7px 0 0 0" }}
                  src="assets/images/VitueCloud_Logo.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </footer>
        <div className="copy">
          <a href="https://www.surekhahomes.com/">
            {new Date().getFullYear()} &copy; All Rights Reserved | Designed and
            Developed by Surekha Homes Pvt. Ltd.
          </a>
        </div>
      </div>
    );
  }
}
