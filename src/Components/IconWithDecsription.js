import React from 'react'
import lgo1 from '../Assets/vision.svg'
import lgo2 from '../Assets/performance.svg'
import lgo3 from '../Assets/security.svg'
import lgo4 from '../Assets/quality.svg'
const IconWithDecsription = () => {
    return (
        <div id="IconWithDescription">
            <div className="container">
                <div className="header">
                    <div className="subHeading">WHY CHOOSE US</div>
                    <div className="Heading">Why We Are Best</div>
                </div>
                <div className="gridWrapper">
                    <div className="box">
                        <div className="logo">
                            <img src={lgo1} alt="" />
                        </div>
                        <div className="title">Clarified Vision & Target</div>
                        <div className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</div>
                    </div>
                    <div className="box">
                        <div className="logo">
                            <img src={lgo2} alt="" />
                        </div>
                        <div className="title">High Performance</div>
                        <div className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</div>
                    </div>
                    <div className="box">
                        <div className="logo">
                            <img src={lgo3} alt="" />
                        </div>
                        <div className="title">Maintain Security</div>
                        <div className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</div>
                    </div>
                    <div className="box">
                        <div className="logo">
                            <img src={lgo4} alt="" />
                        </div>
                        <div className="title">Better Strategy & Quality</div>
                        <div className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IconWithDecsription