import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel2';
import menuimgone from '../../assets/images/resource/menu-image-11.jpg'
import menuimgtwo from '../../assets/images/resource/menu-image-12.jpg'
import menuimgthree from '../../assets/images/resource/menu-image-13.jpg'
import menuimgfour from '../../assets/images/resource/menu-image-14.jpg'


function Special() {
    const options = {
        items: 4,
        rewind: true,
        loop: true,
        margin: 45,
        nav: true,
        smartSpeed: 700,
        autoplay: true,
        autoplayTimeout: 7000,
        navText: ['<span class="icon fa-light fa-angle-left"></span>', '<span class="icon fa-light fa-angle-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 2,
                margin: 30
            },
            992: {
                items: 3,
                margin: 30
            },
            1200: {
                items: 4
            }
        }
    };

    return (

        <>
            <section className="special-offer">
                <div className="outer-container">

                    <div className="auto-container">

                        <div className="title-box centered">
                            <div className="subtitle"><span> special offer </span></div>

                            <div className="pattern-image">
                                <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                            </div>

                            <h2> Best Specialties </h2>
                        </div>

                        <OwlCarousel className="dish-gallery-slider owl-carousel owl-theme" options={options}>

                            <div className="offer-block-two">
                                <div className="inner-box">
                                    <div className="image"><Link to="/"><img src={menuimgone} alt="" /></Link></div>
                                    <h4><Link to="#">Greek Salad</Link></h4>
                                    <div className="text desc">Avocados with crab meat, red onion, crab salad red bell pepper...</div>
                                    <div className="price">$39.00</div>
                                </div>
                            </div>

                            <div className="offer-block-two margin-top">
                                <div className="inner-box">
                                    <div className="image"><Link to="/"><img src={menuimgtwo} alt="" /></Link></div>
                                    <h4><Link to="#">Tokusen Wagyu</Link></h4>
                                    <div className="text desc">Tomatoes, green bell pepper, sliced cucumber onion, olives...</div>
                                    <div className="price">$45.00</div>
                                </div>
                            </div>

                            <div className="offer-block-two">
                                <div className="inner-box">
                                    <div className="image"><Link to="/"><img src={menuimgthree} alt="" /></Link></div>
                                    <h4><Link to="#">Butternut Pumpkin</Link></h4>
                                    <div className="text desc">Avocados with crab meat, red onion, crab salad stuffed bell pepper...</div>
                                    <div className="price">$15.00</div>
                                </div>
                            </div>

                            <div className="offer-block-two margin-top">
                                <div className="inner-box">
                                    <div className="image"><Link to="/"><img src={menuimgfour} alt="" /></Link></div>
                                    <h4><Link to="#">Opu Fish</Link></h4>
                                    <div className="text desc">Vegetables, cheeses, ground meats, tomato sauce, seasonings...</div>
                                    <div className="price">$12.00</div>
                                </div>
                            </div>


                            <div className="offer-block-two">
                                <div className="inner-box">
                                    <div className="image"><Link to="/"><img src={menuimgone} alt="" /></Link></div>
                                    <h4><Link to="#">Greek Salad</Link></h4>
                                    <div className="text desc">Avocados with crab meat, red onion, crab salad red bell pepper...</div>
                                    <div className="price">$39.00</div>
                                </div>
                            </div>


                            <div className="offer-block-two margin-top">
                                <div className="inner-box">
                                    <div className="image"><Link to="/"><img src={menuimgtwo} alt="" /></Link></div>
                                    <h4><Link to="#">Tokusen Wagyu</Link></h4>
                                    <div className="text desc">Tomatoes, green bell pepper, sliced cucumber onion, olives...</div>
                                    <div className="price">$45.00</div>
                                </div>
                            </div>


                            <div className="offer-block-two">
                                <div className="inner-box">
                                    <div className="image"><Link to="/"><img src={menuimgthree} alt="" /></Link></div>
                                    <h4><Link to="#">Butternut Pumpkin</Link></h4>
                                    <div className="text desc">Avocados with crab meat, red onion, crab salad stuffed bell pepper...</div>
                                    <div className="price">$15.00</div>
                                </div>
                            </div>


                            <div className="offer-block-two margin-top">
                                <div className="inner-box">
                                    <div className="image"><Link to="/"><img src={menuimgfour} alt="" /></Link></div>
                                    <h4><Link to="#">Opu Fish</Link></h4>
                                    <div className="text desc">Vegetables, cheeses, ground meats, tomato sauce, seasonings...</div>
                                    <div className="price">$12.00</div>
                                </div>
                            </div>


                        </OwlCarousel>

                        <div className="lower-link-box text-center">
                            <Link to="#" className="theme-btn btn-style-two clearfix">
                                <span className="btn-wrap">
                                    <span className="text-one">view all menu</span>
                                    <span className="text-two">view all menu</span>
                                </span>
                            </Link>
                        </div>

                    </div>

                </div>
            </section>
        </>

    )
}

export default Special