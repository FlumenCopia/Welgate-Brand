import React from 'react'

function Header() {
  return (
    <div>
                <header id="home">
            <div id="header-fixed-height"></div>
            <div id="sticky-header" className="tg-menu-area menu-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mobile-nav-toggler"><i className="flaticon-layout"></i></div>
                            <div className="menu-wrap">
                                <nav className="menu-nav">
                                    <div className="logo">
                                        <a href="index.html">
                                            <img src="assets/img/logo/logo_01.png" alt="Logo"/>
                                        </a>
                                    </div>
                                    <div className="navbar-wrap main-menu d-none d-xl-flex">
                                        <ul className="navigation">
                                            <li className="active menu-item-has-children"><a href="#home" className="section-link">Home</a>
                                                <ul className="sub-menu">
                                                    <li><a href="index.html">Home One</a></li>
                                                    <li className="active"><a href="index-2.html">Home Two</a></li>
                                                    <li><a href="index-3.html">Home Three</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#ingredient" className="section-link">Ingredient</a></li>
                                            <li><a href="#supplement" className="section-link">Supplement</a></li>
                                            <li><a href="#feature" className="section-link">Feature</a></li>
                                            <li className="menu-item-has-children"><a href="#shop" className="section-link">Shop</a>
                                                <ul className="sub-menu">
                                                    <li><a href="shop.html">Our Shop</a></li>
                                                    <li><a href="shop-details.html">Shop Details</a></li>
                                                    <li><a href="cart.html">Cart Page</a></li>
                                                    <li><a href="checkout.html">Checkout Page</a></li>
                                                    <li><a href="login.html">Login Page</a></li>
                                                    <li><a href="register.html">Register Page</a></li>
                                                    <li><a href="reset-password.html">Reset Password Page</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><a href="#news" className="section-link">News</a>
                                                <ul className="sub-menu">
                                                    <li><a href="blog.html">Our Blog</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">contacts</a></li>
                                        </ul>
                                    </div>
                                    <div className="header-btn d-none d-sm-block">
                                        <a href="#order" className="tg-btn">Order Now</a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className="mobile-menu">
            <nav className="menu-box">
                <div className="close-btn"><i className="fas fa-times"></i></div>
                <div className="nav-logo">
                    <a href="index.html"><img src="assets/img/logo/logo_01.png" alt=""/></a>
                </div>
                <div className="menu-outer">
                </div>
                <div className="social-links">
                    <ul className="clearfix">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <div className="menu-backdrop"></div>
    </div>
  )
}

export default Header