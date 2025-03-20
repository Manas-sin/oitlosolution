import React from 'react'

const Right = () => {
  return (
    <>
    {/* Start Copy Right Area  */}
    <div className="copyright-area copyright-style-one">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-8 col-sm-12 col-12">
            <div className="copyright-left">
              <ul className="ft-menu link-hover">
                <li>
                  <a href="privacy-policy.html">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms And Condition</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-12 col-12">
            <div className="copyright-right text-center text-lg-end">
              <p className="copyright-text">© Doob 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Copy Right Area  */}
  </>
  
  )
}

export default Right