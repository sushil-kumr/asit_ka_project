import React from 'react'
import { Link } from 'react-router-dom'
import bg1 from '../../assets/images/background/bg-1.png'
import bg2 from '../../assets/images/background/bg-2.png'
import offerimg1 from '../../assets/images/resource/offer-image-1.jpg'
import offerimg2 from '../../assets/images/resource/offer-image-2.jpg'
import offerimg3 from '../../assets/images/resource/offer-image-3.jpg'



function Offer() {
    return (
        <>
            <section className="we-offer-section">
{/* 
                <div className="left-bot-bg"><img src={bg1} alt="" title="" /></div>

                <div className="right-top-bg"><img src={bg2} alt="" title="" /></div> */}

                <div className="auto-container">

                    <div className="title-box centered">

                        <div className="subtitle"><span>Flavors for royalty</span></div>

                        <div className="pattern-image">

                            <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>We Offer Top Notch</h2>
                        <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever.</div>

                    </div>

                    <div className="row justify-content-center clearfix">

                        <div className="offer-block col-xl-4 col-lg-4 col-md-6 col-sm-12">

                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="image"><Link to="#"><img src={offerimg1} alt="" /></Link></div>
                                <h3><Link to="#">Breakfast</Link></h3>
                                <div className="more-link"><Link to="#">view menu</Link></div>
                            </div>

                        </div>


                        <div className="offer-block col-xl-4 col-lg-4 col-md-6 col-sm-12">

                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                <div className="image"><Link to="#"><img src={offerimg2} alt="" /></Link></div>
                                <h3><Link to="#">Appetizers</Link></h3>
                                <div className="more-link"><Link to="#">view menu</Link></div>
                            </div>

                        </div>


                        <div className="offer-block col-xl-4 col-lg-4 col-md-6 col-sm-12">

                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                                <div className="image"><Link to="#"><img src={offerimg3} alt="" /></Link></div>
                                <h3><Link to="#">Drinks</Link></h3>
                                <div className="more-link"><Link to="#">view menu</Link></div>
                            </div>

                        </div>
                        

                    </div>

                </div>

            </section>
        </>
    )
}

export default Offer