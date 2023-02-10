import React from 'react'
import Backgroundimage from '../../assets/images/background/image-7.jpg';
import OwlCarousel from 'react-owl-carousel';
import quotesone from '../../assets/images/icons/quotes-1.png'
import authorthumb from '../../assets/images/resource/author-thumb-4.jpg'
import authorthumbone from '../../assets/images/resource/author-thumb-5.jpg'
import authorthumbtwo from '../../assets/images/resource/author-thumb-6.jpg'


function Testimonialsabout() {
    const show ={
        loop:true,
			margin:50,
			nav:true,
			smartSpeed: 700,
			autoplay: true,
			autoplayTimeout:7000,
			navText: [ '<span class="icon fa-light fa-angle-left"></span>', '<span class="icon fa-light fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:2,
					margin:30
				},
				992:{
					items:2,
					margin:30
				},
				1200:{
					items:3
				}
			}
    };

    return (
        <>
        
            <section className="testimonials-two">
                <div className="image-layer" style={{ backgroundImage: `url(${Backgroundimage})` }}></div>
                <div className="auto-container">

                    <div className="title-box centered">
                        <div className="subtitle"><span>testimonials</span></div>
                        <div className="pattern-image">
                            <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>
                        <h2>What People Are Saying</h2>
                    </div>

                    <div className="carousel-box" show={show} >

                        <OwlCarousel className="testimonial-slider owl-theme owl-carousel" loop margin={50} {...show}>

                            <div className="testi-block item">
                                <div className="inner-box">
                                    <div className="quote-icon"><img src={quotesone} alt="" title="" /></div>
                                    <div className="rating"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></div>
                                    <div className="text">The taste of food was really amazing, Wow ! outstanding dinner made by Mater chef John Rute, I never forget this delicious food experience.</div>
                                    <div className="auth-info">
                                        <div className="image"><img src={authorthumb} alt="" /></div>
                                        <div className="auth-title">willium joe</div>
                                        <div className="location">New York</div>
                                    </div>
                                </div>
                            </div>

                            <div className="testi-block item">
                                <div className="inner-box">
                                    <div className="quote-icon"><img src={quotesone} alt="" title="" /></div>
                                    <div className="rating"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></div>
                                    <div className="text">Hygienic food & fresh enviroment, everyone had a wonderful delite experience. It was FABULOUS! great experience at The Italian gourmet.</div>
                                    <div className="auth-info">
                                        <div className="image"><img src={authorthumbone} alt="" /></div>
                                        <div className="auth-title">Theresa Tin</div>
                                        <div className="location">Chicago</div>
                                    </div>
                                </div>
                            </div>

                            <div className="testi-block item">
                                <div className="inner-box">
                                    <div className="quote-icon"><img src={quotesone} alt="" title="" /></div>
                                    <div className="rating"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></div>
                                    <div className="text">Special treat to dine, It was wow experience food was really delicious! outstanding dinner made by Mater chef, food experience was unfogetable!</div>
                                    <div className="auth-info">
                                        <div className="image"><img src={authorthumbtwo} alt="" /></div>
                                        <div className="auth-title">Michel Byrd</div>
                                        <div className="location">Denmark</div>
                                    </div>
                                </div>
                            </div>

                            <div className="testi-block item">
                                <div className="inner-box">
                                    <div className="quote-icon"><img src={quotesone} alt="" title="" /></div>
                                    <div className="rating"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></div>
                                    <div className="text">The taste of food was really amazing, Wow ! outstanding dinner made by Mater chef John Rute, I never forget this delicious food experience.</div>
                                    <div className="auth-info">
                                        <div className="image"><img src={authorthumb} alt="" /></div>
                                        <div className="auth-title">willium joe</div>
                                        <div className="location">New York</div>
                                    </div>
                                </div>
                            </div>

                            <div className="testi-block item">
                                <div className="inner-box">
                                    <div className="quote-icon"><img src={quotesone} alt="" title="" /></div>
                                    <div className="rating"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></div>
                                    <div className="text">Hygienic food & fresh enviroment, everyone had a wonderful delite experience. It was FABULOUS! great experience at The Italian gourmet.</div>
                                    <div className="auth-info">
                                        <div className="image"><img src={authorthumbone} alt="" /></div>
                                        <div className="auth-title">Theresa Tin</div>
                                        <div className="location">Chicago</div>
                                    </div>
                                </div>
                            </div>

                            <div className="testi-block item">
                                <div className="inner-box">
                                    <div className="quote-icon"><img src={quotesone} alt="" title="" /></div>
                                    <div className="rating"><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></div>
                                    <div className="text">Special treat to dine, It was wow experience food was really delicious! outstanding dinner made by Mater chef, food experience was unfogetable!</div>
                                    <div className="auth-info">
                                        <div className="image"><img src={authorthumbtwo} alt="" /></div>
                                        <div className="auth-title">Michel Byrd</div>
                                        <div className="location">Denmark</div>
                                    </div>
                                </div>
                            </div>

                        </OwlCarousel>
                        
                    </div>

                </div>
            </section>

        </>
    )
}

export default Testimonialsabout