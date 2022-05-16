import React, { Component } from "react";
import { Link } from "react-scroll/modules";

export default class Home extends Component {
  render() {
    return (
      <div id="home" className="mt-5">
        <section className="container-fluid banner-container">
          <div className="container">
            <div className="row banner-row">
              <div className="col-md-6 banner-txt">
                <h1>
                  GROW YOUR BUSINESS WITH{" "}
                  <span className="text-cloud">CLOUD.</span>
                </h1>
                <p>
                  Security | CI-CD pipelines | Infrastructure As a Code |
                  Monitoring | Compliances | Containerization & Orchestration
                  all at one place
                </p>
                <div className="btn-row row">
                  <Link
                    type="button"
                    className="btn btn-primary readmore"
                    to="about"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className="col-md-6 banner-img">
                <img src="assets/images/slider.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <div className="container-fluid key-featurecont">
          <div className="container">
            <div className="row key-ro">
              <div className="col-md-4 keycol">
                <div className="key-cover">
                  <div className="logo-cc">
                    <img src="assets/images/data-transfer.svg" alt="" />
                  </div>
                  <div className="text-cc">
                    <h3>ANALYZE</h3>
                    <p>
                      Our consulting process begins by collaborating to
                      understand the current stage of your application
                      infrastructure.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 keycol">
                <div className="key-cover">
                  <div className="logo-cc">
                    <img src="assets/images/services/s3.png" alt="" />
                  </div>
                  <div className="text-cc">
                    <h3>SIT BACK AND CODE MORE</h3>
                    <p>
                      System monitoring and Alerting solution takes the reigns
                      once code is live so that you keep coding more and focus
                      on the product.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 keycol">
                <div className="key-cover">
                  <div className="logo-cc">
                    <img src="assets/images/support.svg" alt="" />
                  </div>
                  <div className="text-cc">
                    <h3>DEVELOP SOLUTIONS</h3>
                    <p>
                      Based on your current stage and future projections, we
                      develop the strategy and build Highly Available Cloud
                      Infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
