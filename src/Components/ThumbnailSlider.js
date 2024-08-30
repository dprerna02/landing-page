import React, { useState } from 'react';
import image1 from '../Assets/image1.png';
import image2 from '../Assets/image2.png';
import image3 from '../Assets/image3.png';

const ThumbnailSlider = () => {
    const [activeIndex, setActiveIndex] = useState(1); // Initial active slide index

    const handleSlideClick = (index) => {
        setActiveIndex(index);
    };
    const slides = [
        {
            title: "Genderless Kei – Japan’s Hot",
            description: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
            image: image1,
        },
        {
            title: "Better Strategy & Quality",
            description: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
            image: image2,
        },
        {
            title: "Genderless Kei – Japan’s Hot",
            description: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
            image: image3,
        },
    ];

    return (
        <div id="thumbnailslider">
            <div className="container">
                <div className="header">
                    <div className="subHeading">Our project</div>
                    <div className="Heading">Why We Are Best</div>
                </div>

                <div className="gridWrapper">
                    <div className="imgBlockWrapper">
                        <img src={slides[activeIndex].image} alt={slides[activeIndex].title} className='slideImage' />
                    </div>
                    <div className="infoSlideWrapper">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`infoSlide ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => handleSlideClick(index)}
                            >
                                <div className="title">{slide.title}</div>
                                <div className="description">{slide.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default ThumbnailSlider;
