import React, { Component } from "react";

export default class Testimonials extends Component {
  render() {
    return (
      <section className="testimonial-container">
        <div className="container">
          <div className="section-title row">
            <h2>Testimonial</h2>
            <p>Take a look at what people say about us</p>
          </div>
          <div className="row mt-5">
            <div className="col-md-offset-2 float-auto col-md-10">
              <div id="testimonial-slider" className="owl-carousel">
                <div className="testimonial">
                  <div className="pic">
                    <img src="assets/images/testimonial/member-01.jpg" alt="" />
                  </div>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Assumenda deleniti dolor ipsum molestias mollitia ut.
                    Aliquam aperiam corporis cumque debitis delectus
                    dignissimos. Lorem ipsum dolor sit amet, consectetur.
                  </p>
                  <h3 className="title">
                    williamson
                    <span className="post"> - Developer</span>
                  </h3>
                </div>

                <div className="testimonial">
                  <div className="pic">
                    <img src="assets/images/testimonial/member-02.jpg" alt="" />
                  </div>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Assumenda deleniti dolor ipsum molestias mollitia ut.
                    Aliquam aperiam corporis cumque debitis delectus
                    dignissimos. Lorem ipsum dolor sit amet, consectetur.
                  </p>
                  <h3 className="title">
                    Kristina
                    <span className="post"> - Teacher</span>
                  </h3>
                </div>

                <div className="testimonial">
                  <div className="pic">
                    <img src="assets/images/testimonial/member-02.jpg" alt="" />
                  </div>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Assumenda deleniti dolor ipsum molestias mollitia ut.
                    Aliquam aperiam corporis cumque debitis delectus
                    dignissimos. Lorem ipsum dolor sit amet, consectetur.
                  </p>
                  <h3 className="title">
                    Kristina
                    <span className="post"> - Teacher</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
