import React, { useState } from 'react'
import imgText from '../Assets/imgText.png'
import Popup from './Popup';
const ImageWithText = () => {
    const [isModalopen, setIsmodalOpen] = useState(false);
    const openModal = () => {
        setIsmodalOpen(true);
        // document.body.style.overflow = 'hidden';
    }
    const closeModal = () => {
        setIsmodalOpen(false);
        // document.body.style.overflow = 'auto';

    }
    return (
        <>
            <div id="ImageWithText">
                <div className="container">
                    <div className="gridWrapper">
                        <div className="infoBlock">
                            <div className="subHeading">Award winning</div>
                            <div className="heading">Digital  Marketing  Agency</div>
                            <div className="description">
                                Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum
                            </div>
                            <div className="btnBlock" onClick={openModal}>
                                <div className="button">Contact Us</div>
                            </div>
                        </div>
                        <div className="imgBlock">
                            <a href="">

                                <img src={imgText} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {isModalopen && <Popup onclose={closeModal} contactform={true} />}
        </>
    )
}

export default ImageWithText