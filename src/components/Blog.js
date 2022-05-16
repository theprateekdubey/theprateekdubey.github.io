import React, { Component } from "react";

export default class Blog extends Component {
  render() {
    return (
      <div id="blog">
        <div className="blog">
          <div className="container">
            <div className="section-title row">
              <h2>Our Blog</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="row mt-5 blog-row">
              <div className="col-md-6 col-sm-12">
                <div className="blog-singe no-margin row">
                  <div className="col-sm-5 blog-img-tab">
                    <img src="assets/images/blog/b1.png" alt="" />
                  </div>
                  <div className="col-sm-7 blog-content-tab">
                    <h2>Curabit finibus dui sem.</h2>

                    <p className="blog-desic">
                      Lorem Ipsum, type lorem then press the shortcut. The
                      default keyboard shortcut is the same keyboard shortcut is
                      the{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="blog-singe no-margin row">
                  <div className="col-sm-5 blog-img-tab">
                    <img src="assets/images/blog/b2.png" alt="" />
                  </div>
                  <div className="col-sm-7 blog-content-tab">
                    <h2>Excepteur sint occaecat</h2>

                    <p className="blog-desic">
                      Lorem Ipsum, type lorem then press the shortcut. The
                      default keyboard shortcut is the same keyboard shortcut is
                      the{" "}
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
