import React from 'react'
import '../../extensions/fullpage.parallax.min'
import ReactFullpage from '@fullpage/react-fullpage'
import './Fullpage.css'

const Fullpage = () => (
    <ReactFullpage
        //fullpage options
        scrollingSpeed = {1000} /* Options here */   
        navigation
        parallax

        render = {({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section" id='section0'>
                        <p>Sep 16, 1940 - Dec 7, 1940</p>
                        <h1>The US Heads Towards War</h1>
                        <p>As the war escalated overseas, the US instituted the Selective Training and Service Act of 1940 on September 16 requiring all men between the ages of 21 and 45 to register for the draft. According to US Census records, there were close to 1,500 Dominicans in the US around the time of the draft. Dominican males within the relevant age range totaled close to 400.<br />

A year later, on December 7, 1941, the Imperial Japanese Navy attacked the US Navy fleet at the base of Pearl Harbor. The US subsequently declared war on Japan and the Axis power unilaterally declared war on the US.
</p>
                        <button onClick={() => fullpageApi.moveSectionDown()}>
                            Click me to move down
                        </button>
                    </div>
                    <div className="section" id='section1'>
                        <button onClick={() => fullpageApi.moveSectionUp()}>
                            Click me to move up
                        </button>
                        <p>Section 2</p>
                    </div>
                </ReactFullpage.Wrapper>
                    
            )
        }}
    
    />
)

export default Fullpage;