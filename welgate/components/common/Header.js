import React from 'react';

function Header() {
  return (
    <div>
      <header id="home">
        <div id="header-fixed-height"></div>
        
        <div id="sticky-header" className="tg-menu-area menu-area position-relative">
          <div className=" position-relative">
            {/* 🔘 Fixed Button */}
            <a href="https://welgatelifestyle.com/" className="nav-store btn" target='blank'>
              store
            </a>

            <div className="row align-items-center">
              <div className="col-md-4 d-none d-md-flex justify-content-end customleft">
                <nav className="menu-nav">
                  <div className="navbar-wrap main-menu">
                    <ul className="navigation">
                      <li><a href="/" className="section-link">Home</a></li>
                      <li><a href="/About" className="section-link">About</a></li>
                      <li><a href="/Blog" className="section-link">Blog</a></li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className="col-md-4 col-8 text-center">
                <div className="logo">
                  <a href="/">
                    <img src="/assets/img/logo/welgategropulogo.webp" alt="Logo" />
                  </a>
                </div>
              </div>

              <div className="col-4 d-md-none text-end">
                <div className="mobile-nav-toggler">
                  <i className="flaticon-layout"></i>
                </div>
              </div>

              <div className="col-md-4 d-none d-md-flex justify-content-start customright">
                <nav className="menu-nav">
                  <div className="navbar-wrap main-menu">
                    <ul className="navigation">
                      <li><a href="/Contactus" className="section-link">Brand</a></li>
                      <li><a href="/Gallery" className="section-link">Gallery</a></li>
                      <li><a href="/Contactus" className="section-link">Contact</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mobile-menu">
        <nav className="menu-box">
          <div className="close-btn"><i className="fas fa-times"></i></div>
          <div className="nav-logo">
            <a href="/"><img src="/assets/img/logo/welgategropulogo.webp" alt="Logo" /></a>
          </div>
          <div className="menu-outer"></div>
          <ul className="navigation extra-mobile-links">
            <li><a href="/Contactus" className="section-link">Brand</a></li>
            <li><a href="/Gallery" className="section-link">Gallery</a></li>
            <li><a href="/Contactus" className="section-link">Contact</a></li>
            <li><a href="https://welgatelifestyle.com/" className="section-link">Store</a></li>
          </ul>
          <div className="social-links">
            <ul className="clearfix">
              <li><a href="https://www.facebook.com/welgatelifestyle/" target="blank"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://x.com/organicwelgate" target="blank"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/welgate_lifestyle/" target="blank"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://www.linkedin.com/company/welgate-organic/posts/?feedView=all" target="blank"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="https://www.youtube.com/@welgatelifestyle" target="blank"><i className="fab fa-youtube"></i></a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="menu-backdrop"></div>
    </div>
  );
}

export default Header;
