import React from 'react'
import quoteimg from '../Assets/Quotemarks-left.svg'
const TextBlock = () => {
    return (
        <div id="TextBlock">
            <div className="container">
                <div className="contentWrapper">
                    <div className="subHaeding">client's feedback</div>
                    <div className="Haeding">people say's about us !</div>
                    <div className="description">
                        Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.
                        <div className="note">
                            <div className='notehead'>JANNAT TUMPA </div> - COO, AMERIMAR ENTERPRISES, INC.
                        </div>
                        <div className="quoteimgwrapper">
                            <img src={quoteimg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextBlock