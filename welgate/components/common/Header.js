import React from 'react';

function Header() {


  

  return (
    <div>
      <header id="home">
        <div id="header-fixed-height"></div>
        <div id="sticky-header" className="tg-menu-area menu-area1">
          <div className="container">
            <div className="row align-items-center alignmd">
  {/* Logo */}
<div className="col-lg-2 col-md-2 col-6 d-flex logotransform align-items-center" style={{ transform: 'translateY(9px)',justifyContent:'start' }}>
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
<div className="col-lg-8 d-none d-md-flex linkstransform  flex-wrap justify-content-center"style={{ transform: 'translateY(-23px)' }}>
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

      <div className="mobile-nav-togglers d-lg-none d-md-none  me-3"><i className="flaticon-layout" ></i></div>


<div className="col-lg-2 col-md-4 col-6 d-flex buttontransform justify-content-end align-items-center"style={{ transform: 'translateY(-23px)' }}>


  <div className="header-btn d-none d-md-block">
    <a href="https://welgatelifestyle.com/" target='blank' className="tg-btn">Store</a>
  </div>
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

export default Header;
