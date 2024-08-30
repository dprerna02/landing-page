import React from 'react'
import ContactForm from './ContactForm';
// import ContactForm from './ContactForm';

const Popup = ({ onclose, contactform }) => {
    const handleOverlayClick = (e) => {
        // Check if the click target is the overlay itself, not any child element
        if (e.target === e.currentTarget) {
            onclose();
        }
    };

    return (
        <div id="Modal">
            <div className="modal-overlay" onClick={handleOverlayClick}>
                <div className="modal-content-wrapper">
                    {contactform ? <ContactForm onclose={onclose} /> : null}
                </div>
            </div>
        </div>
    )
}

export default Popup