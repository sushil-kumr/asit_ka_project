import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from "react-owl-carousel";
import FsLightbox from 'fslightbox-react';
import galleryone from '../../assets/images/resource/gallery-1.jpg'
import gallerytwo from '../../assets/images/resource/gallery-2.jpg'
import gallerythree from '../../assets/images/resource/gallery-3.jpg'


function Sliderabout() {

    const [images , setImages] = useState([
   
        galleryone,
        gallerytwo,
        gallerythree,
        galleryone,      
        gallerytwo,
        gallerythree,
        
	])

    const [img,  setImg] = useState()
    const [img1, setImg1] = useState()
    const [img2, setImg2] = useState()
    const [img3, setImg3] = useState()
    const [img4, setImg4] = useState()
    const [img5, setImg5] = useState()

    const [toggler, setToggler] = useState(false);

    const [activeImage , setActiveImage] = useState(1)

    const sliderCard = {
        loop: true,
        items: 1,
        navText:[ '<span class="icon fa-light fa-angle-left"></span>', '<span class="icon fa-light fa-angle-right"></span>' ],
        margin: 30,
        dots: true,
        nav: true,
        smartSpeed: 1000,
        autoplay: true,
        items: 1,
        smartSpeed: 700,
        responsive: {
            0: {
                margin: 0,
                items: 1
            },
            576: {
                margin: 30,
                items: 1
            },
            768: {
                margin: 30,
                items: 1
            },
            992: {
                margin: 30,
                items: 1
            },
            1200: {
                margin: 30,
                items: 1
            }
        },

    }

    return (
        <>

            <section className="image-gallery">
                
                <div className="carousel-box">
                    <div className="auto-container">

                        <OwlCarousel className="image-gallery-slider owl-dot-style-one owl-carousel owl-theme" {...sliderCard} data-owl-options='{}'>
                           
                            <div className="gallery-block">
                                <div className="image">
                                    <Link to="#" onClick={() => setImg(true)}  className="lightbox-image" data-fancybox="gallery">
                                        <figure className="gallery-image" onClick={() => {
                                            setToggler(!toggler)
                                            setActiveImage(1) }}>

                                            <img src={galleryone} alt="" />
                                        </figure>
                                    </Link>
                                </div>
                            </div>

                            <div className="gallery-block item">
                                <div className="image">
                                    <Link to="#" onClick={() => setImg1(true)} className="lightbox-image" data-fancybox="gallery">

                                    <figure className="gallery-image" onClick={() => {
                                            setToggler(!toggler)
                                            setActiveImage(2) }}>

                                        <img src={gallerytwo} alt="" />
                                    </figure>
                                    </Link>
                                </div>
                            </div>

                            <div className="gallery-block item">
                                <div className="image">
                                    <Link to="#"  onClick={() => setImg2(true)} className="lightbox-image" data-fancybox="gallery">


                                    <figure className="gallery-image" onClick={() => {
                                            setToggler(!toggler)
                                            setActiveImage(3) }}>

                                        <img src={gallerythree} alt="" />
                                    </figure>
                                       
                                    </Link>
                                </div>
                            </div>

                            <div className="gallery-block item">
                                <div className="image">

                                    <Link to="#" onClick={() => setImg3(true)} className="lightbox-image" data-fancybox="gallery">
                                    <figure className="gallery-image" onClick={() => {
                                            setToggler(!toggler)
                                            setActiveImage(4) }}>

                                            <img src={galleryone} alt="" />
                                    </figure>
                                        
                                    </Link>

                                </div>
                            </div>

                            <div className="gallery-block item">
                                <div className="image">
                                    <Link to="#" onClick={() => setImg4(true)} className="lightbox-image" data-fancybox="gallery">
                                     <figure className="gallery-image" onClick={() => {
                                            setToggler(!toggler)
                                            setActiveImage(5) }}>

                                            <img src={gallerytwo} alt="" />
                                    </figure>
                                        
                                    </Link>
                                </div>
                            </div>

                            <div className="gallery-block item">
                                <div className="image">
                                    <Link to="#" onClick={() => setImg5(true)} className="lightbox-image" data-fancybox="gallery">

                                    <figure className="gallery-image" onClick={() => {
                                            setToggler(!toggler)
                                            setActiveImage(6) }}> 
                                            
                                            <img src={gallerythree} alt="" />
                                    </figure>
                                        
                                    </Link>
                                </div>
                            </div>
                        
                        </OwlCarousel>

                    </div>
                </div>
                
            </section>
            
            <FsLightbox
                toggler={toggler}
                sources={images}
                slide={activeImage}
            />
        </>
    )
}

export default Sliderabout