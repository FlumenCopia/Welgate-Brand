import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="footer-area">
            {/* <div className="footer-instagram">
                <div className="container">
                    <div className="row g-0 instagram-active">
                        <div className="col-2">
                            <div className="footer-insta-item">
                                <a href="assets/img/others/instagram_post01.jpg" className="popup-image"><img src="assets/img/others/instagram_post01.jpg" alt="img"/></a>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="footer-insta-item">
                                <a href="assets/img/others/instagram_post02.jpg" className="popup-image"><img src="assets/img/others/instagram_post02.jpg" alt="img"/></a>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="footer-insta-item">
                                <a href="assets/img/others/instagram_post03.jpg" className="popup-image"><img src="assets/img/others/instagram_post03.jpg" alt="img"/></a>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="footer-insta-item">
                                <a href="assets/img/others/instagram_post04.jpg" className="popup-image"><img src="assets/img/others/instagram_post04.jpg" alt="img"/></a>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="footer-insta-item">
                                <a href="assets/img/others/instagram_post05.jpg" className="popup-image"><img src="assets/img/others/instagram_post05.jpg" alt="img"/></a>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="footer-insta-item">
                                <a href="assets/img/others/instagram_post06.jpg" className="popup-image"><img src="assets/img/others/instagram_post06.jpg" alt="img"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="footer-top-wrap">
                <div className="container">
                    <div className="footer-widgets-wrap">
                        <div className="row">
                            <div className="col-lg-4 col-md-7">
                                <div className="footer-widget">
                                    <div className="footer-about">
                                        <div className="footer-logo logo">
                                            <a href="index.html"><img src="/assets/img/logo/welgate-logo2.png" alt="Logo"/></a>
                                        </div>
                                        <div className="footer-text">
                                            <p>Built on trust, rooted in tradition. Welgate continues to grow with purpose—naturally.</p>
                                        </div>
                                        <div className="footer-social">
                                            <a href="https://www.facebook.com/welgatelifestyle/"><i className="fab fa-facebook-f"></i></a>
                                            <a href="https://x.com/organicwelgate"><i className="fab fa-twitter"></i></a>
                                            <a href="https://www.instagram.com/welgate_lifestyle/"><i className="fab fa-instagram"></i></a>
                                            <a href="https://www.linkedin.com/company/welgate-organic/posts/?feedView=all"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="https://www.youtube.com/@welgatelifestyle"><i className="fab fa-youtube"></i></a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-5 col-sm-6">
                                <div className="footer-widget">
                                    <h4 className="fw-title">About Us</h4>
                                    <ul className="list-wrap">
                                        <li><a href="/About">About Company</a></li>
                                        {/* <li><a href="#">Affiliate Program</a></li>
                                        <li><a href="#">Customer Spotlight</a></li>
                                        <li><a href="#">Reseller Program</a></li> */}
                                        <li><a href="https://welgatelifestyle.com/">Our Shop</a></li>
                                        {/* <li><a href="#">Price & Plans</a></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-5 col-sm-6">
                                <div className="footer-widget">
                                    <h4 className="fw-title">Support</h4>
                                    <ul className="list-wrap">
                                        {/* <li><a href="#">Knowledge Base</a></li> */}
                                        <li><a href="/Blog">Blog</a></li>
                                        {/* <li><a href="#">Developer API</a></li> */}
                                        <li><a href="#">Gallery</a></li>
                                        {/* <li><a href="#">Team</a></li> */}
                                        <li><a href="/Contactus">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-5">
                                <div className="footer-widget">
                                    <h4 className="fw-title">CONTACT US</h4>
                                    <div className="footer-contact-wrap">
                                        <p>Pattom Kowdiar Road, Kowdiar, Thiruvananthapuram - 695003</p>
                                        <ul className="list-wrap">
                                            <li className="phone"><i className="fas fa-phone"></i> +91 9946828171</li>
                                            <li className="mail"><i className="fas fa-envelope"></i> welgateorganic@gmail.com</li>
                                            <li className="website"><i className="fas fa-globe"></i>www.welgatelifestyle.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-shape one">
                    <img src="assets/img/others/footer_shape01.png" alt="img" className="wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="1s"/>
                </div>
                <div className="footer-shape two">
                    <img src="assets/img/others/footer_shape02.png" alt="img" className="wow fadeInRight" data-wow-delay=".3s" data-wow-duration="1s"/>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row align-items-center">
                        
                            <div className="copyright-text text-center">
                                <p>Copyright © 2025 Flumencopia All Rights Reserved.</p>
                            </div>
                       
                        {/* <div className="col-md-5">
                            <div className="payment-card text-center text-md-end">
                                <img src="assets/img/others/card_img.png" alt="card"/>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer