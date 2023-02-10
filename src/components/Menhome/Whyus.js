import React from 'react'
import bg8 from '../../assets/images/background/bg-8.png'
import bg7 from '../../assets/images/background/bg-7.png'
import whyiconone from '../../assets/images/resource/why-icon-1.png'
import whyicontwo from '../../assets/images/resource/why-icon-2.png'
import whyiconthree from '../../assets/images/resource/why-icon-3.png'
import whyiconfour from '../../assets/images/resource/why-icon-4.png'


function Whyus() {
    return (

        <>
            <section className="why-us">
                <div className="left-bg"><img src={bg8} alt="" title="" /></div>
                <div className="right-bg"><img src={bg7} alt="" title="" /></div>
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>why choose us</span></div>
                        <div className="pattern-image">
                            <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Our Strength</h2>
                    </div>
                    <div className="row clearfix">

                        <div className="why-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="icon-box"><img src={whyiconone} alt="" /></div>
                                <h4>Hygienic Food</h4>
                                <div className="text">Lorem Ipsum is simply dummy printing and typesetting.</div>
                            </div>
                        </div>


                        <div className="why-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                <div className="icon-box"><img src={whyicontwo} alt="" /></div>
                                <h4>Fresh Environment</h4>
                                <div className="text">Lorem Ipsum is simply dummy printing and typesetting.</div>
                            </div>
                        </div>


                        <div className="why-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                                <div className="icon-box"><img src={whyiconthree} alt="" /></div>
                                <h4>Skilled Chefs</h4>
                                <div className="text">Lorem Ipsum is simply dummy printing and typesetting.</div>
                            </div>
                        </div>


                        <div className="why-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="900ms">
                                <div className="icon-box">
                                    <img src={whyiconfour} alt="" />
                                </div>

                                <h4>Event & Party</h4>
                                <div className="text">Lorem Ipsum is simply dummy printing and typesetting.</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>

    )
}

export default Whyus