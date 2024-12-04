import React from "react";
import "./Hero.css"
import liftbanner from "../../assets/left-banner-image.jpg"
import rightba from "../../assets/baner-right-image-01.jpg"
import rightban from "../../assets/baner-right-image-02.jpg"
import rightbann from "../../assets/baner-right-image-03.jpg"
import rightbanner from "../../assets/baner-right-image-04.jpg"

const Hero = () => {

    return(
        <div>
    <div className="main-container">
        <div className="left">
            <img src={liftbanner} />
        </div>
        <div className="right">
            <img src={rightba} />
            <img src={rightban} />
            <img src={rightbann} />
            <img src={rightbanner} />
        </div>
    </div>  
        </div >
    )
}
export default Hero;