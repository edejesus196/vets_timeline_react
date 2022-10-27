import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import './Fullpage.css'

const Fullpage = () => (
    <ReactFullpage
        //fullpage options
        scrollingSpeed = {1000} /* Options here */   

        render = {({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section" id='section0'>
                        <p>Section 1 (welcome to fullpage.js)</p>
                        <button onClick={() => fullpageApi.moveSectionDown()}>
                            Click me to move down
                        </button>
                    </div>
                    <div className="section" id='section1'>
                        <p>Section 2</p>
                    </div>
                </ReactFullpage.Wrapper>
                    
            )
        }}
    
    />
)

export default Fullpage;