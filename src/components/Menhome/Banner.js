import React from 'react'
import { Link } from 'react-router-dom'
import Slideone from '../../assets/images/main-slider/slider-1.jpg'
import Slidetwo from '../../assets/images/main-slider/slider-2.jpg'
import Slidethree from '../../assets/images/main-slider/slider-3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import bookicon1 from '../../assets/images/resource/book-icon-1.png'


function Banner() {
    return (
        <>

            <Swiper className="banner-section"
                loop={true}
                spaceBetween={50}
                slidesPerView={1} 
                navigation={{
                    nextEl: '.swiper-button-prev',
                    prevEl: '.swiper-button-next',
                  }}>

                <div className="banner-container">
                    <div className="banner-slider" >
                        <div className="swiper-wrapper">

                            <SwiperSlide>
                                <div className="swiper-slide slide-item">

                                    <div className="image-layer" style={{ backgroundImage: `url(${Slideone})` }}></div>

                                    <div className="auto-container">
                                        <div className="content-box">
                                            <div className="content">
                                                <div className="clearfix">
                                                    <div className="inner">
                                                        <div className="subtitle"><span>delightful experience</span></div>

                                                        <div className="pattern-image">

                                                            <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />

                                                        </div>


                                                        <h1><span>Flavors Inspired by <br />the Seasons</span></h1>
                                                        <div className="text">Come with family & feel the joy of mouthwatering food</div>
                                                        <div className="links-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                            <div className="link">
                                                                <Link to="#" className="theme-btn btn-style-two clearfix">
                                                                    <span className="btn-wrap">
                                                                        <span className="text-one">view our menu</span>
                                                                        <span className="text-two">view our menu</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="swiper-slide slide-item">
                                    <div className="image-layer" style={{ backgroundImage: `url(${Slidetwo})` }}></div>
                                    <div className="auto-container">
                                        <div className="content-box">
                                            <div className="content">
                                                <div className="clearfix">
                                                    <div className="inner">
                                                        <div className="subtitle"><span>delightful experience</span></div>
                                                        <div className="pattern-image">
                                                            <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                                                        </div>
                                                        <h1><span>Where every flavor <br />tells a story</span></h1>
                                                        <div className="text">Come with family & feel the joy of mouthwatering food</div>
                                                        <div className="links-box clearfix">
                                                            <div className="link">
                                                                <Link to="#" className="theme-btn btn-style-two clearfix">
                                                                    <span className="btn-wrap">
                                                                        <span className="text-one">view our menu</span>
                                                                        <span className="text-two">view our menu</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="swiper-slide slide-item">
                                    <div className="image-layer" style={{ backgroundImage: `url(${Slidethree})` }}></div>
                                    <div className="auto-container">
                                        <div className="content-box">
                                            <div className="content">
                                                <div className="clearfix">
                                                    <div className="inner">
                                                        <div className="subtitle"><span>delightful experience</span></div>
                                                        <div className="pattern-image">
                                                            <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                                                        </div>
                                                        <h1><span>For the love of <br />delicious food</span></h1>
                                                        <div className="text">Come with family & feel the joy of mouthwatering food</div>
                                                        <div className="links-box clearfix">
                                                            <div className="link">
                                                                <Link to="#" className="theme-btn btn-style-two clearfix">
                                                                    <span className="btn-wrap">
                                                                        <span className="text-one">view our menu</span>
                                                                        <span className="text-two">view our menu</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            
                            
                        </div>

                        <div className="swiper-button-prev"><span className="fal fa-angle-left"></span></div>
                        <div className="swiper-button-next"><span className="fal fa-angle-right"></span></div>
       

                    </div>
                </div>

                <div className="book-btn">
                    <Link to="#" className="theme-btn">
                        <span className="icon">
                            <img src={bookicon1} alt="" title="" />
                        </span>
                        <span className="txt">book a table</span>
                    </Link>
                </div>
                
            </Swiper>

        </>
    )
}

export default Banner