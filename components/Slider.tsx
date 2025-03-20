import React from 'react'

const Slider = () => {
  return (
    <>
    {/* Start Slider Area  */}
    <div
      className="slider-area slider-style-1 variation-default height-850 bg_image bg_image--3"
      data-black-overlay={7}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center">
              <span className="subtitle">DIGITAL CONSULTING AGENCY</span>
              <h1 className="title display-one">
              OITLO <span>SOLUTIONS</span>
              </h1>
              <p className="description">
                We help our clients succeed by creating brand identities, digital
                experiences, and print materials.
              </p>
              <div className="button-group">
                <a className="btn-default btn-medium round btn-icon" href="#">
                  Start Now<i className="icon feather-arrow-right" />
                </a>
                <a
                  className="btn-default btn-medium btn-border round btn-icon"
                  href="contact.html"
                >
                  Contact Us <i className="icon feather-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default Slider