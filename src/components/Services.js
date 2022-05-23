import React, { Component } from "react";

export default class Services extends Component {
  render() {
    return (
      <section id="services" className="features container-fluid">
        <div className="container">
          <div className="row section-title">
            <h2>Explore Our Services</h2>
            <p>
              We have a team of DevOps which are proficient in different tools &
              services which are aligned to meet your business goals quickly &
              cost effective.
            </p>
          </div>
          <div className="row mt-5 feature-row">
            <div className="col-md-4">
              <div className="feature-col">
                <img src="assets/images/services/docker.png" alt="" />
                <h4>Kubernetes Deployment</h4>
                <p>
                  Deploy on any cloud/on-prem with Kubernetes & docker. Use our
                  managed stack of Kubernetes Deployment for production setup to
                  get you running in few hours.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-col">
                <img src="assets/images/services/aws_gcp_azure.jpg" alt="" />
                <h4>Cloud Deployment</h4>
                <p>
                  Deploy to any cloud on AWS,GCP,Azure,Digital Ocean etc with
                  security first approach and scale to handle any amount of
                  traffic with continues deployement.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-col">
                <img src="assets/images/services/CDN_new.jpg" alt="" />
                <h4>Continous Integration/Deployment</h4>
                <p>
                  Pick your own tool or select from few of tools we use Jenkins,
                  Aws Pipeline, Bitbucket, Gitlab, CircleCI & Azure DevOps.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-col">
                <img src="assets/images/services/new-iac.png" alt="" />
                <h4>Infrastructure As A Code</h4>
                <p>
                  Deploy on any cloud/on-prem with Kubernetes & docker. Use our
                  managed stack of Kubernetes Deployment for production setup to
                  get you running in few hours.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-col">
                <img src="assets/images/services/rewire.png" alt="" />
                <h4>Training</h4>
                <p>
                  We provide cloud training tools and help you set up networks
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-col">
                <img src="assets/images/services/sre-new.png" alt="" />
                <h4>Site Reliability Engineer</h4>
                <p>
                  Have multiple enviornments which require constant changes,
                  Monitoring, Logging, Alerting & critical SLA's to meet and
                  debug production issues on the fly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
