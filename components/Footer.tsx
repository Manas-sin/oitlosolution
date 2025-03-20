import React from 'react'

const Footer = () => {
  return (
    <>
    {/* Start Footer Area  */}
    <footer className="rainbow-footer footer-style-default footer-style-1">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="rainbow-footer-widget">
                <div className="logo">
                  <a href="index.html">
                    <img
                      className="logo-light"
                      src="images/logo.png"
                      alt="Corporate Logo"
                    />
                    <img
                      className="logo-dark"
                      src="images/logo-dark.png"
                      alt="Corporate Logo"
                    />
                  </a>
                </div>
                <h3 className="text-big">
                  Create Website By Doob So Quick Download And Make Your Site.
                </h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="rainbow-footer-widget">
                <div className="widget-menu-top">
                  <h4 className="title">Services</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      <li>
                        <a href="testimonial.html">Testiminial</a>
                      </li>
                      <li>
                        <a href="index-company.html">Company</a>
                      </li>
                      <li>
                        <a href="index-marketing-agency.html">Marketing</a>
                      </li>
                      <li>
                        <a href="index-startup.html">Startup</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget-menu-bottom">
                  <h4 className="title">Products</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="portfolio.html">Portfolio</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="service.html">Service</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="rainbow-footer-widget">
                <div className="widget-menu-top">
                  <h4 className="title">Company</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      <li>
                        <a href="index-corporate.html">Corporate</a>
                      </li>
                      <li>
                        <a href="portfolio.html">Portfolio</a>
                      </li>
                      <li>
                        <a href="index-seo-agency.html">SEO Agency</a>
                      </li>
                      <li>
                        <a href="index-web-agency.html">Web Agency</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget-menu-bottom">
                  <h4 className="title">Solutions</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      <li>
                        <a href="gallery.html">Gallery</a>
                      </li>
                      <li>
                        <a href="testimonial.html">Testimonial</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="service.html">Service</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="rainbow-footer-widget">
                <h4 className="title">Newsletter</h4>
                <div className="inner">
                  <h6 className="subtitle">
                    2000+ Our clients are subscribe Around the World
                  </h6>
                  <form className="newsletter-form" action="#">
                    <div className="form-group">
                      <input type="email" placeholder="Enter Your Email Here" />
                    </div>
                    <div className="form-group">
                      <button className="btn-default" type="submit">
                        Submit Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* End Footer Area  */}
  </>
  
  )
}

export default Footer