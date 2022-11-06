import React, {useState, useEffect} from 'react'
import { useRef } from 'react'
import Events from './Events'
import { GlobalStyle } from './Global'
// import './timeline.css'
import Line from './Line'
import { AgSection, FormatContainer, TimelineBlock, TimelineContainer, TimelineCardPoint, TimelineItem } from './TimelineElements'

const Timeline = () => {
    const [events, setEvents] = useState ([
        {
            id: 1,
            year: '1939',
            date: 'Sep 1, 1939',
            text: 'World War II began on September 1, 1939 with the invasion of Poland by Nazi Germany under Adolf Hitler.'
        
        },
        {
            id: 2,
            year: '1940',
            date: 'Sep 16, 1940',
            text: 'As the war escalated overseas, the US instituted the Selective Training and Service Act of 1940 on September 16 requiring all men between the ages of 21 and 45 to register for the draft. According to US Census records, there were close to 1,500 Dominicans in the US around the time of the draft. Dominican males within the relevant age range totaled close to 400'
        },
        {
            id: 3,
            year: '1941',
            date: 'December 7, 1941',
            text: 'A year later, on December 7, 1941, the Imperial Japanese Navy attacked the US Navy fleet at the base of Pearl Harbor. The US subsequently declared war on Japan and the Axis power unilaterally declared war on the US.'
        },
        {
            id: 4,
            year: '1943',
            date: 'October 28, 1943',
            text: 'Approximately 340 Dominicans enlisted in the US Armed Forces during World War II. News of their service made its way back home. On October 28, 1943, La Nacion, then the national paper of the Dominican Republic, published a list with the names of 112 Dominicans serving in the US Armed Forces.'
        }
    ])

    
    const [agPosY, setAgPosY] = useState(0);
    const [agHeight, setHeight] = useState(window.innerHeight);
    const [agFlag, setAgFlag] = useState(false);
    const [top, setTop] = useState(0);
    const [bottom, setBottom] = useState(0);
    const ref = useRef(null);


    const fnUpdateWindow = () => {
       setAgFlag(false)

       const TimelineEls = ref.current;

        const firstPointTopPos = TimelineEls.querySelectorAll(TimelineCardPoint)[0].getBoundingClientRect().top
        const FirstItemTopPos = TimelineEls.querySelectorAll(TimelineItem)[0].getBoundingClientRect().top

        const TimelineTopPos = TimelineEls.getBoundingClientRect().top
        const TimelineHeight = TimelineEls.getBoundingClientRect().height
        const TimelineItemEls = TimelineEls.querySelectorAll(TimelineItem)
        const lastPointTopPos = TimelineItemEls[TimelineItemEls.length - 1].querySelector(TimelineCardPoint).getBoundingClientRect().top

        console.log(TimelineTopPos + TimelineHeight - lastPointTopPos)
        
        setBottom(TimelineTopPos + TimelineHeight - lastPointTopPos)

        setTop(firstPointTopPos - FirstItemTopPos)

    }

    const fnUpdateFrame = () => {
        agFlag || requestAnimationFrame(fnUpdateWindow);
        setAgFlag(true);
    }

    
    // get Y position
    const fnOnScroll = () => {
        const position = window.pageYOffset;
        
        setAgPosY(position)
    }

    useEffect(() =>  {
        window.addEventListener('resize', fnOnScroll);
       
        return () => {
            window.removeEventListener('resize', fnOnScroll);
            
        }
    }, []);

    // get agHeight
    const fnOnResize = () => {
        const position = window.pageYOffset;
        const agHeight = window.innerHeight
        setAgPosY(position)
        setHeight(agHeight)

        console.log('test resize')
    }
    
    useEffect(() => {
        window.addEventListener('resize', fnOnResize);

        return () => {
            window.removeEventListener('resize', fnOnResize);
        };
    
    }, [])

    useEffect(() => {
        fnUpdateFrame()


    }, [agPosY, agHeight]);
    

    
    return (
        <>
            <GlobalStyle/>
            <TimelineBlock>
                <AgSection>
                    <FormatContainer>
                        <TimelineContainer ref={ref}>
                            <Line top={top} bottom={bottom}/>
                            <Events  events={events} />
                        </TimelineContainer>
                    </FormatContainer>
                </AgSection>
            </TimelineBlock>

        </>
        
        
    )
}

export default Timeline