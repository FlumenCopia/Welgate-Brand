import React from 'react';

function Header2() {
  return (
    <div>
      <header id="home ">
        <div id="header-fixed-height"></div>
        <div id="sticky-header" className="tg-menu-area2 menu-area shadow-lg">
          <div className="container">
            <div className="row align-items-center">
  {/* Logo */}
<div className="col-lg-2 col-md-2 col-6 d-flex  align-items-center" >
  <div className="logo">
    <a href="/">
      <img
        src="/assets/img/logo/LOGO PNG welgate.png"
        alt="Logo"
      />
    </a>
  </div>
</div>

{/* Navigation Menu (hidden on md and below) */}
<div className="col-lg-8 col-md-8 col-8 d-none d-md-flex linkstransform2  flex-wrap justify-content-center">
  <div className="navbar-wrap main-menu">
    <ul className="navigation  mb-0">
      <li><a href="/" className="section-link">Home</a></li>
      <li><a href="/About" className="section-link">About</a></li>
      <li><a href="/#Brand" className="section-link">Brand</a></li>
      <li><a href="/#Initiative" className="section-link">Initiative</a></li>
      <li><a href="/Impact" className="section-link">Impact</a></li>
      <li><a href="/Blog" className="section-link">Blog</a></li>
      <li><a href="/Gallery" className="section-link">Gallery</a></li>
      <li><a href="/Contactus">Contact</a></li>

    </ul>
  </div>
</div>

{/* Store Button & Toggle */}
<div className="col-lg-2 col-md-4 col-6 d-flex  justify-content-end align-items-center">
  {/* Show toggle on md and below */}
   <div className="header-btn buttontransform2    d-xs-none d-lg-block" style={{marginRight:'20px'}}>
    <a href="https://welgatelifestyle.com/" target='blank' className=" storeclr ">Store</a>
  </div>
  
    <div className="mobile-nav-toggler d-lg-none d-md-none d-md-block me-3"><i className="flaticon-layout"></i></div>

 
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
            <a href="/">
              <img src="/assets/img/logo/LOGO_PNG_welgate-removebg-preview.png" alt="" />
            </a>
          </div>
          <div className="menu-outer"></div>
          <div className="social-links">
            <ul className="clearfix">
              <li><a href="https://www.facebook.com/welgatelifestyle/" target='blank'><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://x.com/organicwelgate" target='blank'><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/welgate_lifestyle/?hl=en" target='blank'><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://www.linkedin.com/company/welgate-organic/?originalSubdomain=in" target='blank'><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="https://www.youtube.com/@welgatelifestyle/featured" target='blank'><i className="fab fa-youtube"></i></a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="menu-backdrop"></div>
    </div>
  );
}

export default Header2;
