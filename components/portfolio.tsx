import React from 'react'

const Portfolio
 = () => {
  return (
    <>
    {/* Start Portfolio Area  */}
    <div className="rainbow-portfolio-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h4 className="subtitle ">
                <span className="theme-gradient">Business Projects</span>
              </h4>
              <h2 className="title w-600 mb--20">Business Case Studies.!</h2>
              <p className="description b1">
                We provide company and finance service for <br /> startups and
                company business.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="rainbow-portfolio-filter filter-button-default messonry-button text-center mb--30">
              <button data-filter="*" className="is-checked">
                <span className="filter-text">All</span>
              </button>
              <button data-filter=".cat--1">
                <span className="filter-text">design</span>
              </button>
              <button data-filter=".cat--2">
                <span className="filter-text">art</span>
              </button>
              <button data-filter=".cat--3">
                <span className="filter-text">development</span>
              </button>
            </div>
            <div className="portfolio-items grid-metro3 mesonry-list">
              <div className="resizer" />
              {/* Start Single Portfolio  */}
              <div className="portfolio-3 cat--1 cat--3">
                <div className="rainbow-card portfolio">
                  <div className="inner">
                    <div className="thumbnail">
                      <figure className="card-image">
                        <a href="portfolio-details.html">
                          <img src="images/portfolio-01.jpg" alt="Portfolio-01" />
                        </a>
                      </figure>
                      <a
                        className="rainbow-overlay"
                        href="portfolio-details.html"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title mb--10">
                        <a href="portfolio-details.html">App Development</a>
                      </h5>
                      <span className="subtitle b2">development</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Start Single Portfolio  */}
              {/* Start Single Portfolio  */}
              <div
                className="portfolio-3 cat--2 cat--1"
                style={{ position: "absolute", left: "33.2574%", top: 0 }}
              >
                <div className="rainbow-card portfolio">
                  <div className="inner">
                    <div className="thumbnail">
                      <figure className="card-image">
                        <a href="portfolio-details.html">
                          <img src="images/portfolio-02.jpg" alt="Portfolio-01" />
                        </a>
                      </figure>
                      <a
                        className="rainbow-overlay"
                        href="portfolio-details.html"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title mb--10">
                        <a href="portfolio-details.html">Business Development</a>
                      </h5>
                      <span className="subtitle b2">design</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Start Single Portfolio  */}
              {/* Start Single Portfolio  */}
              <div
                className="portfolio-3 cat--3 cat--2 cat--1"
                style={{ position: "absolute", left: "66.5907%", top: 0 }}
              >
                <div className="rainbow-card portfolio">
                  <div className="inner">
                    <div className="thumbnail">
                      <figure className="card-image">
                        <a href="portfolio-details.html">
                          <img src="images/portfolio-03.jpg" alt="Portfolio-01" />
                        </a>
                      </figure>
                      <a
                        className="rainbow-overlay"
                        href="portfolio-details.html"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title mb--10">
                        <a href="portfolio-details.html">Photoshop Design</a>
                      </h5>
                      <span className="subtitle b2">art</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Start Single Portfolio  */}
              {/* Start Single Portfolio  */}
              <div
                className="portfolio-3 cat--3 cat--2"
                style={{ position: "absolute", left: "0%", top: 415 }}
              >
                <div className="rainbow-card portfolio">
                  <div className="inner">
                    <div className="thumbnail">
                      <figure className="card-image">
                        <a href="portfolio-details.html">
                          <img src="images/portfolio-04.jpg" alt="Portfolio-01" />
                        </a>
                      </figure>
                      <a
                        className="rainbow-overlay"
                        href="portfolio-details.html"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title mb--10">
                        <a href="portfolio-details.html">Native Application</a>
                      </h5>
                      <span className="subtitle b2">development</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Start Single Portfolio  */}
              {/* Start Single Portfolio  */}
              <div
                className="portfolio-3 cat--2 cat--1"
                style={{ position: "absolute", left: "33.2574%", top: 415 }}
              >
                <div className="rainbow-card portfolio">
                  <div className="inner">
                    <div className="thumbnail">
                      <figure className="card-image">
                        <a href="portfolio-details.html">
                          <img src="images/portfolio-05.jpg" alt="Portfolio-01" />
                        </a>
                      </figure>
                      <a
                        className="rainbow-overlay"
                        href="portfolio-details.html"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title mb--10">
                        <a href="portfolio-details.html">React Development</a>
                      </h5>
                      <span className="subtitle b2">Application</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Start Single Portfolio  */}
              {/* Start Single Portfolio  */}
              <div
                className="portfolio-3 cat--3 cat--2 cat--1"
                style={{ position: "absolute", left: "66.5907%", top: 415 }}
              >
                <div className="rainbow-card portfolio">
                  <div className="inner">
                    <div className="thumbnail">
                      <figure className="card-image">
                        <a href="portfolio-details.html">
                          <img src="images/portfolio-06.jpg" alt="Portfolio-01" />
                        </a>
                      </figure>
                      <a
                        className="rainbow-overlay"
                        href="portfolio-details.html"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title mb--10">
                        <a href="portfolio-details.html">App Installment</a>
                      </h5>
                      <span className="subtitle b2">Photoshop</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Start Single Portfolio  */}
            </div>
          </div>
        </div>
        {/* Start Load More Button  */}
        <div className="row row--15">
          <div className="col-lg-12">
            <div className="rainbow-load-more text-center mt--60">
              <a
                href="portfolio.html"
                className="btn btn-default btn-large btn-icon"
              >
                <span>
                  Load More <span className="icon feather-loader" />
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* End Load More Button  */}
      </div>
    </div>
    {/* <!-- Start Seperator Area  --> */}
    <div className="rbt-separator-mid">
  <div className="container">
    <hr className="rbt-separator m-0" />
  </div>
</div>
  </>
  
  )
}

export default Portfolio
