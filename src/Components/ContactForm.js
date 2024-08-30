import React from 'react'

const ContactForm = ({ onclose }) => {
    const onSubmit = () => {
    }
    return (
        <div id="contactForm">
            <form action="https://getform.io/f/paqglzea" method='POST'>
                <div className="heading">Talk to us</div>
                <div className="formInputs">
                    <input name="email" className='mailInput' type="mail" placeholder='Work Email' required />
                    <div className="nameInput">
                        <input type="text" name='name' className="firstName" placeholder='First Name*' required />
                        <input type="text" name='last Name' className="lastName" placeholder='Last Name*' required />
                    </div>
                </div>
                <div className="TermCondions">
                    <input className='termCheckBox'
                        type="checkbox" required
                    />
                    I agree to Fyle's terms and conditions, and provide consent to send me communication.
                </div>
                <button type='submit' className="contactUs" onClick={onSubmit}>Contact Us</button>
            </form>
        </div>
    )
}

export default ContactForm