import React from 'react';
import Backgroundimage from '../../assets/images/background/image-4.jpg';
import { Link } from 'react-router-dom'
import logonew from '../../assets/images/logo.png'


function Main() {
    return (
        <>

            <footer className="main-footer">
                <div className="image-layer" style={{ backgroundImage: `url(${Backgroundimage})` }}> </div>
                <div className="upper-section">
                    <div className="auto-container">
                        <div className="row clearfix">

                            <div className="footer-col info-col col-lg-6 col-md-12 col-sm-12">
                                <div className="inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="content">
                                        <div className="logo"><Link to="/" title="Delici - Restaurants HTML Template"><img src={logonew} alt="" title="Delici - Restaurants HTML Template" /></Link></div>
                                        <div className="info">
                                            <ul>
                                                <li>Restaurant St, Delicious City, London 9578, UK</li>
                                                <li><Link to="mailto:booking@domainname.com">booking@domainname.com</Link></li>
                                                <li><Link to="tel:+88-123-123456">Booking Request : +88-123-123456</Link></li>
                                                <li>Open : 09:00 am - 01:00 pm</li>
                                            </ul>
                                        </div>
                                        <div className="separator"><span></span><span></span><span></span></div>
                                        <div className="newsletter">
                                            <h3>Get News & Offers</h3>
                                            <div className="text">Subscribe us & Get <span>25% Off.</span></div>
                                            <div className="newsletter-form">
                                                <form method="post" action="index.html">
                                                    <div className="form-group">
                                                        <span className="alt-icon far fa-envelope"></span>
                                                        <input type="email" name="email" placeholder="Your email" required />
                                                        <button type="submit" className="theme-btn btn-style-one clearfix">
                                                            <span className="btn-wrap">
                                                                <span className="text-one">subscribe</span>
                                                                <span className="text-two">subscribe</span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-col links-col col-lg-3 col-md-6 col-sm-12">
                                <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <ul className="links">
                                        <li> <Link to="/">Home</Link></li>
                                        <li> <Link to="/menu">Menus</Link></li>
                                        <li> <Link to="/about">About us</Link></li>
                                        <li> <Link to="/ourchefs">Our chefs</Link></li>
                                        <li> <Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="footer-col links-col last col-lg-3 col-md-6 col-sm-12">
                                <div className="inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <ul className="links">
                                        <li> <a href="https://www.facebook.com">facebook</a></li>
                                        <li> <a href="https://www.instagram.com">instagram</a></li>
                                        <li> <a href="https://twitter.com">Twitter</a></li>
                                        <li> <a href="https://www.youtube.com">Youtube</a></li>
                                        <li> <a href="https://www.google.com/maps">Google map</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="copyright">&copy; 2022 Restaurt. All Rights Reserved   |    Crafted by <Link to="https://themeforest.net/user/kalanidhithemes" target="blank">Kalanidhi Themes</Link></div>
                    </div>
                </div>

            </footer>
            <div className="scroll-to-top scroll-to-target" data-target="html"><span className="icon fa fa-angle-up"></span></div>

        </>

    )
}

export default Main