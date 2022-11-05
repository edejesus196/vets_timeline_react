import styled from 'styled-components'


export const TimelineBlock = styled.div`
    padding: 300px 0;
`

export const AgSection = styled.section`

`

export const FormatContainer = styled.div`
    width: 1160px;
    margin: 0 auto;
    position: relative;

    @media only screen and (max-width: 767px) {
        width: 96%;
    }

    @media (min-width: 768px) and (max-width: 979px) {
        width: 750px;
    }

    @media (min-width: 980px) and (max-width: 1161px) {
        width: 960px;
    }
`

// Timeline
export const TimelineContainer = styled.div`
    display: inline-block;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
  
    position: relative;
`

export const TimelineLine = styled.div`
    width: 2px;
    background-color: #393935;
  
    position: absolute;
    top: 2px;
    left: 50%;
    bottom: 0;
  
    overflow: hidden;
  
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);

    @media only screen and (max-width: 979px) {
        left: 30px;
    }
`

export const TimelineProgress = styled.div`
    width: 100%;
    height: 20%;
    background-color: #FF0;
    
`
// Timeline items
export const TimelineCardbox = styled.div`
    padding: 0 0 20px 50%;

    @media only screen and (max-width: 979px) {
                padding: 0 0 20px;
            }
`
export const TimelineCardPointBox = styled.div`
    display: inline-block;
    margin: 0 14px 0 -28px;

    @media only screen and (max-width: 979px) {
        margin: 0 0 0 8px;
    }
`
export const TimelineCardInner = styled.div`

`

export const TimelineCardInfo = styled.div`
    padding: 20px 30px;

    @media only screen and (max-width: 639px) {
        padding: 10px 15px;
    }
`
export const TimelineCardTitle = styled.div`
    display: none;
    margin: 10px 0 0;
  
    font-family: 'ESL Legend', sans-serif;
    font-weight: bold;
    font-size: 28px;
    color: #FF0;

    @media only screen and (max-width: 979px) {
        display: block;
    }
`

export const TimelineCardDesc = styled.div`
    line-height: 1.45;

    font-size: 16px;
    color: #FFF;

    @media only screen and (max-width: 639px) {
        font-size: 14px;
    }
`

export const TimelineMetaBox = styled.div`
    display: inline-block;

    @media only screen and (max-width: 979px) {
        display: none;
    }
`

export const TimelineMeta = styled.div`
    margin: 10px 0 0;

    font-family: 'ESL Legend', sans-serif;
    font-weight: bold;
    font-size: 28px;
    color: #FF0;
`

export const TimelineCardPoint = styled.div`
    
    height: 50px;
    line-height: 50px;
    width: 50px;
    border: 3px solid #FF0;
    background-color: #1d1d1b;
  
    text-align: center;
    font-family: 'ESL Legend', sans-serif;
    font-size: 20px;
    color: #FFF;
  
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;

    //active 
    color: #1d1d1b;
    background-color: #FF0;

    @media only screen and (max-width: 979px) {
        height: 40px;
        line-height: 40px;
        width: 40px;
    }
`

export const TimeCardItem = styled.div`
    display: inline-block;
    width: 45%;
    margin: -77px 0 0;
    background-color: #282828;
  
    opacity: 0;
  
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
  
    -webkit-box-shadow: 0 0 0 0 rgba(0,0,0,.5);
    -moz-box-shadow: 0 0 0 0 rgba(0,0,0,.5);
    -o-box-shadow: 0 0 0 0 rgba(0,0,0,.5);
    box-shadow: 0 0 0 0 rgba(0,0,0,.5);
  
    /* -webkit-transition: -webkit-transform .5s, opacity .5s;
    -moz-transition: -moz-transform .5s, opacity .5s;
    -o-transition: -o-transform .5s, opacity .5s;
    transition: transform .5s, opacity .5s; */
  
    position: relative;

    @media only screen and (max-width: 979px) {
        width: auto;
        margin: -65px 0 0 75px
    }
`

export const TimelineItem = styled.div`
    margin: 0 0 50px;
    position: relative;
`

export const TimelineList = styled.div`
    ${TimelineItem}:nth-child(2n) {
        text-align: right;
        ${TimelineCardbox} {
            padding: 0 50% 20px 0;
            ${TimelineCardPointBox} {
                margin: 0 -28px 0 14px;
            }
        };
        ${TimeCardItem} {
            /* -webkit-transform: translateX(200%);
            -moz-transform: translateX(200%);
            -ms-transform: translateX(200%);
            -o-transform: translateX(200%);
            transform: translateX(200%); */

            // active 
            opacity: 1;
            
            /* -webkit-transform: translateX(0);
            -moz-transform: translateX(0);
            -ms-transform: translateX(0);
            -o-transform: translateX(0);
            transform: translateX(0); */

        };

    
         
        @media only screen and (max-width: 979px) {
            text-align: left;

            ${TimelineCardbox} {
                padding: 0 0 20px;
                ${TimelineCardPointBox} {
                    margin: 0 0 0 8px;
                };
            };
            ${TimeCardItem} {
                /* -webkit-transform: translateX(200%);
                -moz-transform: translateX(200%);
                -ms-transform: translateX(200%);
                -o-transform: translateX(200%);
                transform: translateX(200%); */
            };
            
        };
        
        
    };
    ${TimelineItem}:nth-child(2n+1) {
        ${TimeCardItem} {
            /* -webkit-transform: translateX(-200%);
            -moz-transform: translateX(-200%);
            -ms-transform: translateX(-200%);
            -o-transform: translateX(-200%);
            transform: translateX(-200%); */

             // active 
            opacity: 1;
    
            /* -webkit-transform: translateX(0);
            -moz-transform: translateX(0);
            -ms-transform: translateX(0);
            -o-transform: translateX(0);
            transform: translateX(0); */
        };

       

        @media only screen and (max-width: 979px) {
            ${TimeCardItem} {
                /* -webkit-transform: translateX(200%);
                -moz-transform: translateX(200%);
                -ms-transform: translateX(200%);
                -o-transform: translateX(200%);
                transform: translateX(200%); */
            };
        };
        
    }






`

