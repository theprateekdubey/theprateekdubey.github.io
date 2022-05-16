import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div id="about">
        <section className="container-fluid about-coo">
          <div className="container">
            <div className="row section-title">
              <h2>About Us</h2>
              <p>Next Gen DevOps Built Over Cutting Edge Technology Stacks</p>
            </div>
            <div className="row about-row">
              <div className="col-md-5 about-img">
                <img src="assets/images/about.png" alt="" />
              </div>
              <div className="col-md-6 about-text">
                <h1>We are the Leading Cloud Service Provider</h1>
                <p className="text-center">How It Works</p>
                <div className="about-featur">
                  <ul>
                    <li>
                      <i className="fa fa-check"></i> Boost SEO Sharing
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Social Sharing
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Marketing
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Retention
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Visual Review
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Review Generation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
