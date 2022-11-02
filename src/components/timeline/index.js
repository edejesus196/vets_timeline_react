import React, {useState, useEffect} from 'react'
import Events from './Events'
// import './timeline.css'
import Line from './Line'

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

    
    const [scrollPosition, setScrollPosition] = useState(0);
    const [height, setHeight] = useState(0);

    // get Y position
    const handleScroll = () => {
        const position = window.pageYOffset;
        
        setScrollPosition(position)
    }

    useEffect(() =>  {
        window.addEventListener('resize scroll', handleScroll, { passive: true});

        return () => {
            window.removeEventListener('resize scroll', handleScroll);
        }
    }, []);

    // get height
    const handleHeight = () => {
        const agHeight = window.innerHeight

        setHeight(agHeight)
    }
    
    useEffect(() => {
        window.addEventListener('resize', handleHeight);

        return () => {
            window.removeEventListener('resize', handleHeight);
        };
    
    }, [])

    // console.log(height)

    
    return (
        <div className='ag-timeline-block'>
            <div className='ag-section'>
                <div className='ag-format-container'>
                    <div className='js-timeline ag-timeline'>
                        <Line height={height}/>
                        <Events events={events} />
                    </div>
                    
                </div>
            </div>
        </div>
        
        
    )
}

export default Timeline