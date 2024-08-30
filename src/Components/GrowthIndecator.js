import React from 'react'
import logo1 from '../Assets/heart (2).svg'
import logo2 from '../Assets/clock (3).svg'
import logo3 from '../Assets/Path 4402.svg'
import logo4 from '../Assets/Path 4406.svg'
const GrowthIndecator = () => {
    return (
        <div id="GrowthIndecator">
            <div className="container">
                <div className="header">
                    <div className="subHeading">Experts growts</div>
                    <div className="Heading">Our Company Growth</div>
                </div>
                <div className="gridWrapper">
                    <div className="box">
                        <div className="logo">
                            <img src={logo1} alt="" />
                        </div>
                        <div className="count">199 +</div>
                        <div className="description">Staticfied Customers</div>
                    </div>
                    <div className="box">
                        <div className="logo">
                            <img src={logo2} alt="" />
                        </div>
                        <div className="count">1591 +</div>
                        <div className="description">Days Of Operation</div>
                    </div>
                    <div className="box">
                        <div className="logo">
                            <img src={logo3} alt="" />
                        </div>
                        <div className="count">283 +</div>
                        <div className="description">Complete Project</div>
                    </div>
                    <div className="box">
                        <div className="logo">
                            <img src={logo4} alt="" />
                        </div>
                        <div className="count">75 +</div>
                        <div className="description">Win Awards</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GrowthIndecator