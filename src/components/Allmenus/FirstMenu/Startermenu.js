import React from 'react'
import { Link } from 'react-router-dom'
import bgone from '../../../assets/images/background/bg-16.png'
import bgtwo from '../../../assets/images/background/bg-17.png'
import bgthree from '../../../assets/images/background/bg-18.png'
import menuone from '../../../assets/images/resource/menus-1.jpg'
import menutwo from '../../../assets/images/resource/menus-2.jpg'



function Startermenu() {
    return (

        <>

            <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Much longer nav link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            </ul>
            {/* <section classNameName="menu-one">
                <div classNameName="right-bg"><img src={bgone} alt="" title="" /></div>
                <div classNameName="auto-container">
                    <div classNameName="title-box centered">
                        <div classNameName="subtitle"><span>STARTER MENU</span></div>

                        <div classNameName="pattern-image">
                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Appetizers</h2>
                    </div>

                    <div classNameName="row clearfix">
                        <div classNameName="image-col col-lg-7 col-md-12 col-sm-12">
                            <div classNameName="inner">
                                <div classNameName="image"><img src={menuone} alt="" /></div>
                            </div>
                        </div>
                        <div classNameName="menu-col col-lg-5 col-md-12 col-sm-12">
                            <div classNameName="inner">

                                <div classNameName="dish-block">
                                    <div classNameName="inner-box">
                                        <div classNameName="title clearfix"><div classNameName="ttl clearfix"><h5><Link to="#">Greek Salad</Link></h5></div><div classNameName="price"><span>$25.50</span></div></div>
                                        <div classNameName="text desc"><Link to="#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</Link></div>
                                    </div>
                                </div>

                                <div classNameName="dish-block">
                                    <div classNameName="inner-box">
                                        <div classNameName="title clearfix"><div classNameName="ttl clearfix"><h5><Link to="#">Lasagne <span classNameName="s-info">SEASONAL</span></Link></h5></div><div classNameName="price"><span>$40.00</span></div></div>
                                        <div classNameName="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                    </div>
                                </div>

                                <div classNameName="dish-block">
                                    <div classNameName="inner-box">
                                        <div classNameName="title clearfix"><div classNameName="ttl clearfix"><h5><Link to="#">Butternut Pumpkin</Link></h5></div><div classNameName="price"><span>$10.00</span></div></div>
                                        <div classNameName="text desc"><Link to="#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</Link></div>
                                    </div>
                                </div>

                                <div classNameName="dish-block">
                                    <div classNameName="inner-box">
                                        <div classNameName="title clearfix"><div classNameName="ttl clearfix"><h5><Link to="#">Tokusen Wagyu <span classNameName="s-info">NEW</span></Link></h5></div><div classNameName="price"><span>$39.00</span></div></div>
                                        <div classNameName="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section classNameName="menu-one alternate">
                <div classNameName="left-bg"><img src={bgtwo} alt="" title="" /></div>
                <div classNameName="right-bg-2"><img src={bgthree} alt="" title="" /></div>
                <div classNameName="auto-container">
                    <div classNameName="title-box centered">
                        <div classNameName="subtitle"><span>Delicious</span></div>

                        <div classNameName="pattern-image">
                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Main Dishes</h2>

                    </div>

                    <div classNameName="row clearfix">
                        <div classNameName="image-col col-lg-7 col-md-12 col-sm-12">
                            <div classNameName="inner">
                                <div classNameName="image"><img src={menutwo} alt="" /></div>
                            </div>
                        </div>
                        <div classNameName="menu-col col-lg-5 col-md-12 col-sm-12">
                            <div classNameName="inner">

                                <div classNameName="dish-block">
                                    <div classNameName="inner-box">
                                        <div classNameName="title clearfix"><div classNameName="ttl clearfix"><h5><Link to="#">Greek Salad</Link></h5></div><div classNameName="price"><span>$25.50</span></div></div>
                                        <div classNameName="text desc"><Link to="#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</Link></div>
                                    </div>
                                </div>

                                <div classNameName="dish-block">
                                    <div classNameName="inner-box">
                                        <div classNameName="title clearfix"><div classNameName="ttl clearfix"><h5><Link to="#">Lasagne <span classNameName="s-info">SEASONAL</span></Link></h5></div><div classNameName="price"><span>$40.00</span></div></div>
                                        <div classNameName="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                    </div>
                                </div>

                                <div classNameName="dish-block">
                                    <div classNameName="inner-box">
                                        <div classNameName="title clearfix"><div classNameName="ttl clearfix"><h5><Link to="#">Butternut Pumpkin</Link></h5></div><div classNameName="price"><span>$10.00</span></div></div>
                                        <div classNameName="text desc"><Link to="#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</Link></div>
                                    </div>
                                </div>

                                <div classNameName="dish-block">
                                    <div classNameName="inner-box">
                                        <div classNameName="title clearfix"><div classNameName="ttl clearfix"><h5><Link to="#">Tokusen Wagyu <span classNameName="s-info">NEW</span></Link></h5></div><div classNameName="price"><span>$39.00</span></div></div>
                                        <div classNameName="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>

    )
}

export default Startermenu