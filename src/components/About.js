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
                      <i className="fa fa-check"></i> Kubernetes Deployment
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Cloud Deployment
                    </li>

                    <li>
                      <i className="fa fa-check"></i> Infrastructure As A Code
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Training
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Site Reliability Engineer
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Continous
                      Integration/Deployment
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
