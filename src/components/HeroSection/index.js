import React from 'react';
import './heroSection.css'
import { Button } from "../ButtonElement"
import vetsLogo from '../../images/Dominican_vets_wwII.svg'



function HeroSection() {
    return (
        <div className="hero-container">
            <img className="logo" src={vetsLogo}/>
            <div className="hero-btns">
                <Button >
                    Start Timeline
                </Button>
            </div>
        </div>
    )
}

export default HeroSection