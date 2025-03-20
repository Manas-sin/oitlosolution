import React from 'react'

const ServiceArea = () => {
  return (
    <>
  {/* Start Service-5 Area  */}
  <div className="rainbow-service-area rainbow-section-gap">
    <div className="container">
      <div className="row row--15 service-wrapper">
        <div
          className="col-lg-4 col-md-6 col-sm-6 col-12"
          data-sal="slide-up"
          data-sal-duration={800}
        >
          <div className="service service__style--1 icon-circle-style text-center">
            <div className="icon">
              <i className="feather-activity" />
            </div>
            <div className="content">
              <h4 className="title w-600">
                <a href="#">Awarded Design</a>
              </h4>
              <p className="description b1 color-gray mb--0">
                There are many variations variations of passages of Lorem Ipsum
                available, but the majority have suffered.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 col-sm-6 col-12"
          data-sal="slide-up"
          data-sal-delay={100}
          data-sal-duration={800}
        >
          <div className="service service__style--1 icon-circle-style text-center">
            <div className="icon">
              <i className="feather-map" />
            </div>
            <div className="content">
              <h4 className="title w-600">
                <a href="#">Design &amp; Creative</a>
              </h4>
              <p className="description b1 color-gray mb--0">
                Passages there are many variations variations of of Lorem Ipsum
                available, but the majority have suffered.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 col-sm-6 col-12"
          data-sal="slide-up"
          data-sal-delay={200}
          data-sal-duration={800}
        >
          <div className="service service__style--1 icon-circle-style text-center">
            <div className="icon">
              <i className="feather-cast" />
            </div>
            <div className="content">
              <h4 className="title w-600">
                <a href="#">App Development</a>
              </h4>
              <p className="description b1 color-gray mb--0">
                Variations There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Start Service-5 Area  */}
</>
  )
}

export default ServiceArea