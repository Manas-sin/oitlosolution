import React from "react";
import Link from "next/link";

const Headthree = () => {
  return (
    <>
      {/* Start Header Area  */}
      <header className="rainbow-header header-default header-transparent header-sticky">
        <div className="container position-relative">
          <div className="row align-items-center row--0">
            <div className="col-lg-3 col-md-6 col-4">
              <div className="logo">
                <Link href="/">
                  <img
                    className="logo-light"
                    src="/images/logo.png"
                    alt="Corporate Logo"
                    style={{ height: "20rem" }} // Adjust the width and height as needed
                  />
                  <img
                    className="logo-dark"
                    src="/images/logo-dark.png"
                    alt="Corporate Logo"
                    style={{ height: "10rem" }} // Adjust the width and height as needed
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-9 col-md-6 col-8 position-static">
              <div className="header-right">
                <nav className="mainmenu-nav d-none d-lg-block">
                  <ul className="mainmenu">
                    <li className="with-megamenu has-menu-child-item position-relative">
                      <Link href="/">Home</Link>
                      <div className="rainbow-megamenu with-mega-item-2">
                        <div className="wrapper">
                          <div className="row row--0">
                            
                          
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>

                    <li className="has-droupdown has-menu-child-item">
                      <Link href="#">Technologies</Link>
                      <ul className="submenu">
                        <li className="has-droupdown">
                          <ul className="submenu">
                            <li>
                              <Link href="/cloudcomputing">Cloud Computing</Link>
                            </li>
                            <li>
                              <Link href="/softwaredevelopment">Software Development</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/consulting">Consulting</Link>
                    </li>
                    <li>
                      <Link href="/automation">Automation</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                {/* Start Header Btn  */}
                <div className="header-btn"></div>
                {/* End Header Btn  */}
                {/* Start Mobile-Menu-Bar */}
                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                  <div className="hamberger">
                    <button className="hamberger-button">
                      <i className="feather-menu" />
                    </button>
                  </div>
                </div>
                {/* Start Mobile-Menu-Bar */}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* End Header Area  */}
    </>
  );
};

export default Headthree;