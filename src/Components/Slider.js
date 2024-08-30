import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';

import slide1 from '../Assets/slide1.png'
import slide2 from '../Assets/slide2.png'
import slide3 from '../Assets/slide3.png'
import slide4 from '../Assets/slide4.png'
import slide5 from '../Assets/slide5.png'
import webicon from '../Assets/webicon.svg'
import arrow from '../Assets/arrow.png'


// import required modules
import { Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const slides = [
    {
        "id": 1,
        "image": slide1
    },
    {
        "id": 2,
        "image": slide2
    },
    {
        "id": 3,
        "image": slide3
    },
    {
        "id": 4,
        "image": slide4
    },
    {
        "id": 5,
        "image": slide5
    }
];

const Slider = () => {
    return (
        <div id="slider">


            <div className='container'>
                <div className="header">
                    <div className="subHeading">WHAT WE DO</div>
                    <div className="headingWrapper container">
                        <div className="heading">Services provide <br /> for you</div>
                        <div className="description">Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum</div>
                    </div>
                </div>
                <Swiper
                    slidesPerView={1.3}
                    breakpoints={{
                        // when window width is >= 640px

                        // when window width is >= 768px
                        768: {
                            // width: 768,
                            slidesPerView: 3.7,
                        },
                    }}

                    spaceBetween={20}
                    mousewheel={false}

                    keyboard={{
                        enabled: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{ delay: 2000 }}
                    modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
                    className="mySwiper1"
                >
                    {slides.map(slide => (
                        <SwiperSlide key={slide.id} className='customslide'>
                            <img src={slide.image} alt="" />

                            <div className="content">
                                <div className="imgWrapper">
                                    <img src={webicon} alt="" />
                                </div>
                                <div className="title">WEB DEVELOPMENT</div>
                                <div className="description">Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</div>
                                <a href='https://www.fylehq.com/' target="_blank" className="button">
                                    READ MORE
                                    <div className="arrowicon">

                                        <img src={arrow} alt="" />
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div >
        </div>
    )
}

export default Slider