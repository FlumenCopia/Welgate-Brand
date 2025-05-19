import React from 'react';

function Header() {
  return (
    <div>
      <header id="home">
        <div id="header-fixed-height"></div>
        <div id="sticky-header" className="tg-menu-area menu-area">
          <div className="container">
            <div className="row align-items-center">
              {/* Mobile Toggle - Restored */}
              <div className="col-2 d-xl-none">
                <div className="mobile-nav-toggler">
                  <i className="flaticon-layout"></i>
                </div>
              </div>

              {/* Left Navigation */}
              <div className="col-4 d-none d-xl-flex justify-content-end">
                <nav className="menu-nav">
                  <div className="navbar-wrap main-menu">
                    <ul className="navigation">
                      <li><a href="/" className="section-link">Home</a></li>
                      <li><a href="/About" className="section-link">About Us</a></li>
                      <li><a href="/Blog" className="section-link">Blog</a></li>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* Logo in the Center */}
              <div className="col-4 text-center">
                <div className="logo">
                  <a href="/">
                    <img src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/yp1ocnxyfoqv9rmflsao" alt="Logo" />
                  </a>
                </div>
              </div>

              {/* Right Navigation */}
              <div className="col-4 d-none d-xl-flex justify-content-start">
                <nav className="menu-nav">
                  <div className="navbar-wrap main-menu">
                    <ul className="navigation">
                      <li><a href="/Gallery" className="section-link">Gallery</a></li>
                      <li><a href="/Contactus" className="section-link">Contact Us</a></li>
                     <div class="header-btn d-none d-sm-block">
                                        <a href="#order" class="tg-btn">Order Now</a>
                    </div>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <nav className="menu-box">
          <div className="close-btn"><i className="fas fa-times"></i></div>
          <div className="nav-logo">
            <a href="/"><img src="assets/img/logo/welgate-logo2.png" alt="Logo" /></a>
          </div>
          <div className="menu-outer"></div>
          <div className="social-links">
            <ul className="clearfix">
              <li><a href="https://www.facebook.com/welgatelifestyle/" target='blank'><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://x.com/organicwelgate" target='blank'><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/welgate_lifestyle/" target='blank'><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://www.linkedin.com/company/welgate-organic/posts/?feedView=all" target='blank'><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="https://www.youtube.com/@welgatelifestyle" target='blank'><i className="fab fa-youtube"></i></a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="menu-backdrop"></div>
    </div>
  );
}

export default Header;