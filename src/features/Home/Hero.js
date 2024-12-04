import React from "react";
import "./Hero.css"
const Hero =() =>{

    return(
        <div>
            <div className="main-container">
                <div className="left">
                    <p>This is the left Div</p>
                </div>
                <div className="right">
                    <div className="right item">1</div>
                    <div className="right item">2</div>
                    <div className="right item">3</div>
                    <div className="right item">4</div>
                </div>
            </div>
        </div>
    )
}
export default Hero;