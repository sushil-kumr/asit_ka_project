import React from 'react'
import featuredone from '../../assets/images/resource/featured-4.jpg'
import featuredtwo from '../../assets/images/resource/featured-5.jpg'
import featuredthree from '../../assets/images/resource/featured-6.jpg'
import featuredfour from '../../assets/images/resource/featured-7.jpg'


import whyiconone from '../../assets/images/resource/why-icon-1.png'
import whyicontwo from '../../assets/images/resource/why-icon-2.png'
import whyiconthree from '../../assets/images/resource/why-icon-3.png'
import whyicontfour from '../../assets/images/resource/why-icon-4.png'


function Aboutwhyus() {
    return (

        <>
            <section className="why-us-two">
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>why choose us</span></div>
                        <div className="pattern-image">
                            <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>
                        <h2>Our Strength</h2>
                    </div>
                    <div className="row clearfix">

                        <div className="why-block-two col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="image-box"><img src={featuredone} alt="" /></div>
                                <div className="over-box">
                                    <div className="icon-box"><img src={whyiconone} alt="" /></div>
                                    <h4>Hygienic Food</h4>
                                </div>
                            </div>
                        </div>


                        <div className="why-block-two m-top col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                <div className="image-box"><img src={featuredtwo} alt="" /></div>
                                <div className="over-box">
                                    <div className="icon-box"><img src={whyicontwo} alt="" /></div>
                                    <h4>Fresh Environment</h4>
                                </div>
                            </div>
                        </div>


                        <div className="why-block-two col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                                <div className="image-box"><img src={featuredthree} alt="" /></div>
                                <div className="over-box">
                                    <div className="icon-box"><img src={whyiconthree} alt="" /></div>
                                    <h4>Skilled Chefs</h4>
                                </div>
                            </div>
                        </div>


                        <div className="why-block-two m-top col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="900ms">
                                <div className="image-box"><img src={featuredfour} alt="" /></div>
                                <div className="over-box">
                                    <div className="icon-box"><img src={whyicontfour} alt="" /></div>
                                    <h4>Event & Party</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>

    )
}

export default Aboutwhyus