import React from 'react'
import { Link } from 'react-router-dom'
import bg5 from '../../assets/images/background/bg-5.png'
import bg6 from '../../assets/images/background/bg-6.png'
import toronto from '../../assets/images/resource/toronto.png'
import paris from '../../assets/images/resource/paris.png'
import dubai from '../../assets/images/resource/dubai.png'
import ny from '../../assets/images/resource/ny.png'




function Book() {
    return (
        <>
            <section className="online-reservation inner-page">
                <div className="left-bg"><img src={bg5} alt="" title="" /></div>
                <div className="right-bg"><img src={bg6} alt="" title="" /></div>
                <div className="auto-container">
                <section className="reserve-section">
                <div className="auto-container">
                    <div className="outer-box">

                        <div className="row clearfix">
                            <div className="reserv-col col-lg-8 col-md-12 col-sm-12">
                                <div className="inner">
                                    <div className="title">
                                        <h2>Online Reservation</h2>
                                        <div className="request-info">Booking request <Link to="#">+88-123-123456</Link> or fill out the order form</div>
                                    </div>
                                    <div className="default-form reservation-form">
                                        <form method="post" action="index.html">
                                            <div className="row clearfix">
                                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                    <div className="field-inner">
                                                        <input type="text" name="fieldname" placeholder="Your Name" required />
                                                    </div>
                                                </div>
                                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                    <div className="field-inner">
                                                        <input type="text" name="fieldname" placeholder="Phone Number" required />
                                                    </div>
                                                </div>
                                                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                                    <div className="field-inner">
                                                        <span className="alt-icon far fa-user"></span>
                                                        <select className="l-icon">
                                                            <option>1 Person</option>
                                                            <option>2 Person</option>
                                                            <option>3 Person</option>
                                                            <option>4 Person</option>
                                                            <option>5 Person</option>
                                                            <option>6 Person</option>
                                                            <option>7 Person</option>
                                                        </select>
                                                        <span className="arrow-icon far fa-angle-down"></span>
                                                    </div>
                                                </div>
                                                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                                    <div className="field-inner">
                                                        <span className="alt-icon far fa-calendar"></span>
                                                        <input className="l-icon datepicker" type="text" name="fieldname" placeholder="DD-MM-YYYY" required readOnly />
                                                        <span className="arrow-icon far fa-angle-down"></span>
                                                    </div>
                                                </div>
                                                <div className="form-group col-lg-4 col-md-12 col-sm-12">
                                                    <div className="field-inner">
                                                        <span className="alt-icon far fa-clock"></span>
                                                        <select className="l-icon">
                                                            <option>08 : 00 am</option>
                                                            <option>09 : 00 am</option>
                                                            <option>10 : 00 am</option>
                                                            <option>11 : 00 am</option>
                                                            <option>12 : 00 pm</option>
                                                            <option>01 : 00 pm</option>
                                                            <option>02 : 00 pm</option>
                                                            <option>03 : 00 pm</option>
                                                            <option>04 : 00 pm</option>
                                                            <option>05 : 00 pm</option>
                                                            <option>06 : 00 pm</option>
                                                            <option>07 : 00 pm</option>
                                                            <option>08 : 00 pm</option>
                                                            <option>09 : 00 pm</option>
                                                            <option>10 : 00 pm</option>
                                                        </select>
                                                        <span className="arrow-icon far fa-angle-down"></span>
                                                    </div>
                                                </div>
                                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                    <div className="field-inner">
                                                        <textarea name="fieldname" placeholder="Message" required></textarea>
                                                    </div>
                                                </div>
                                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                    <div className="field-inner">

                                                        <button type="submit" className="theme-btn btn-style-one clearfix">
                                                            <span className="btn-wrap">
                                                                <span className="text-one">book a table</span>
                                                                <span className="text-two">book a table</span>
                                                            </span>
                                                        </button>

                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="info-col col-lg-4 col-md-12 col-sm-12">
                                <div className="inner">
                                    <div className="title">
                                        <h2>Contact Us</h2>
                                    </div>
                                    <div className="data">
                                        <div className="booking-info">
                                            <div className="bk-title">Booking request</div>
                                            <div className="bk-no"><Link to="tel:+88-123-123456">+88-123-123456</Link></div>
                                        </div>
                                        <div className="separator"><span></span></div>
                                        <ul className="info">
                                            <li><strong>Location</strong><br />Restaurant St, Delicious City, London 9578, UK</li>
                                            <li><strong>Lunch Time</strong><br />Monday to Sunday <br />11.00 am - 2.30pm</li>
                                            <li><strong>Dinner Time</strong><br />Monday to Sunday <br />05.00 pm - 10.00pm</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
                </div>

                <div className="map-location-section">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="row clearfix">
                                <div className="reserv-col col-lg-8 col-md-12 col-sm-12">
                                    <div className="inner">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81392.11276571127!2d-74.03116502768826!3d40.70144849986174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1667928043843!5m2!1sen!2sin" width="100%" height="600" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                                <div className="info-col col-lg-4 col-md-12 col-sm-12">
                                    <div className="inner">
                                        <div className="title">
                                            <h2>New York</h2>
                                        </div>
                                        <div className="data">
                                            <ul className="info">
                                                <li><strong>Contact Us</strong><br />Restaurant St, Delicious City,<br /> London 9578, UK <br /> Call : +88-123-123456 <br /> Email : booking@domainname.com </li>
                                                <div className="separator"><span></span></div>
                                                <li><strong>Lunch Time</strong><br />Monday to Sunday <br />11.00 am - 2.30pm</li>
                                                <li><strong>Dinner Time</strong><br />Monday to Sunday <br />05.00 pm - 10.00pm</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="location-center">
                    <div className="auto-container">
                        <div className="row clearfix">

                            <div className="location-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                    <div className="icon-box"><img src={ny} alt="" /></div>
                                    <h4>New York</h4>
                                    <div className="text">Restaurant St, Delicious City, NY. <br /> +88-123-123456<br />booking@domainname.com</div>
                                    <div className="more-link"><Link to="#">get direction</Link></div>
                                </div>
                            </div>


                            <div className="location-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                    <div className="icon-box"><img src={dubai} alt="" /></div>
                                    <h4>Dubai</h4>
                                    <div className="text">520, Delicious City, Revenu Db.<br />+88-123-123456<br />booking@domainname.com</div>
                                    <div className="more-link"><Link to="#">get direction</Link></div>
                                </div>
                            </div>


                            <div className="location-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                                    <div className="icon-box"><img src={paris} alt="" /></div>
                                    <h4>Paris</h4>
                                    <div className="text">589, Delicious Avenue PS.<br />+88-123-123456 <br /> booking@domainname.com</div>
                                    <div className="more-link"><Link to="#">get direction</Link></div>
                                </div>
                            </div>


                            <div className="location-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="900ms">
                                    <div className="icon-box"><img src={toronto} alt="" /></div>
                                    <h4>Toronto</h4>
                                    <div className="text">Restaurant St, Delicious City, CA <br /> +88-123-123456 <br /> booking@domainname.com</div>
                                    <div className="more-link"><Link to="#">get direction</Link></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section> 
        </>
    )
}

export default Book