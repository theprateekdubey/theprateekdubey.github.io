import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div id="about">
        <section className="container-fluid about-coo">
          <div className="container">
            <div className="row section-title">
              <h2>About Us</h2>
              {/**<p>Next Gen DevOps Built Over Cutting Edge Technology Stacks</p> */}
              <p style={{ maxWidth: "max-content" }}>
                &bull; We at Virtue cloud are working with our clients to help
                them use the full potential of cloud and be worry free and get
                rid of all the manuals process which they have to follow for the
                deployment of the applications and infra. <br />
                &bull; We love to explore and help new domains in the technology
                like Data Engineering , Application Development using
                Micro-services design pattern , Fintech , HealthCare , Travel
                and much more .We like automate your systems get on cloud with
                right practices that one should follow , to increase their
                system’s reliablity , availability , scalablity and also
                optimise cost , We also provide terraform for IaC so that in
                future you can spin up a whole environment by your own ,<br />
                &bull; We are team of expert people with majority of people
                having worked with companies like AWS , JP Morgan Chase and many
                more great MNCs We have a vision to work with every startup or
                Small and Medium scale companies and help them to achieve the
                agility that the Cloud Platform and following the right
                practices on it provides{" "}
              </p>
            </div>
            <div className="row about-row">
              <div className="col-md-5 about-img">
                <img src="assets/images/about.png" alt="" />
              </div>
              <div className="col-md-6 about-text">
                <h1>We majorly provide services in the following TechStack</h1>
                {/** <p className="text-center">How It Works</p> */}
                <div className="about-featur">
                  <ul>
                    <li>
                      <i className="fa fa-check"></i> AWS ECS
                    </li>
                    <li>
                      <i className="fa fa-check"></i> AWS EKS - KUBERNETES
                    </li>

                    <li>
                      <i className="fa fa-check"></i> TERRAFORM
                    </li>
                    <li>
                      <i className="fa fa-check"></i> ARCHITECTURE DESIGN
                    </li>
                    <li>
                      <i className="fa fa-check"></i> HELM CHARTS - K8S
                    </li>
                    <li>
                      <i className="fa fa-check"></i> LOGGING AND MONITORING
                      (ELK STACK AND GRAFANA FOR MONITORING)
                    </li>
                    <li>
                      <i className="fa fa-check"></i> CI/CD (USING BITBUCKET ,
                      GITLAB , GITHUB AND JENKINS OR CIRCLECI SETUP )
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 about-text">
                <h1 style={{ textAlign: "center" }} className="mt-4">
                  We majorly provide services in the following TechStack
                </h1>
                {/** <p className="text-center">How It Works</p> */}
                <div className="about-featur">
                  <ul className="about-service-new">
                    <li>
                      <i className="fa fa-check"></i> We put dedicated resources
                      for your service with supervision of senior fellows
                    </li>
                    <li>
                      <i className="fa fa-check"></i> We don’t charge for
                      Knowledge Transfer*
                    </li>

                    <li>
                      <i className="fa fa-check"></i> We follow JIRA for
                      allocations of tasks and have a project manager assigned
                      by us for our work.
                    </li>
                    <li>
                      <i className="fa fa-check"></i> We have a strict practice
                      of writing down documetation for everything we do .
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Since we sometimes have
                      some free resources with us all the time we put them into
                      action to speed up the things if needed .
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
