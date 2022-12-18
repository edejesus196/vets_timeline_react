
import React, { useState, useEffect, useRef } from 'react'
import { GlobalStyle } from './Global'
import './timeline.css'

const Timeline = () => {
    const [events, setEvents] = useState([
        {
          id: 1,
          year: 2021,
          season: 'Season 13',
          img: "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-13.png",
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula\
                        eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient\
                        montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,\
                        pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla\
                        vel, aliquet nec, vulputate eget, arcu.'
        },
        {
          id: 2,
          year: 2020,
          season: 'Season 12',
          img: "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-12.png",
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula\
                        eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient\
                        montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,\
                        pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla\
                        vel, aliquet nec, vulputate eget, arcu.'
        },
        {
          id: 3,
          year: 2020,
          season: 'Season 11',
          img: "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timeline/images/img-11.png",
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula\
                        eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient\
                        montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,\
                        pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla\
                        vel, aliquet nec, vulputate eget, arcu.'
        }
      ])
      const agTimeline = useRef(null);
      const agTimelineLine = useRef(null);
      const agTimelineLineProgress = useRef(null);
      const agTimelinePoints = useRef([]);
      agTimelinePoints.current = []
      const agTimelineItems = useRef([]);
      agTimelineItems.current = []
      const [agOuterHeight, setAgOuterHeight] = useState(window.innerHeight)
      const [agHeight, setAgHeight] = useState(0);
      const [f, setF] = useState(-1);
      const [n, setN] = useState(0)
      const [agFlag, setAgFlag] = useState(false);
      const [agPosY, setAgPosY] = useState(0);
      const [top, setTop] = useState(0);
      const [bottom, setBottom] = useState(0);
    
      useEffect(() => {
        window.addEventListener('scroll', fnOnScroll);
        window.addEventListener('resize', fnOnResize);
    
        setAgOuterHeight(window.outerHeight);
        setAgHeight(window.innerHeight);
    
        return () => {
          window.removeEventListener('scroll', fnOnScroll)
          window.removeEventListener('resize', fnOnResize)
        };
      }, []);
    
      // useEffect(() => {
      //   fnUpdateFrame();
        
      // }, [agPosY, agHeight]);
    
      function fnOnScroll() {
        setAgPosY(window.scrollY);
      }
    
      function fnOnResize() {
        setAgPosY(window.scrollY);
        setAgHeight(window.innerHeight);
      }
    
      function fnUpdateWindow() {
        setAgFlag(false);
    
        setTop((agTimelineItems.current[0].querySelector('.js-timeline-card_point-box').getBoundingClientRect().top + window.scrollY)-  (agTimelineItems.current[0].getBoundingClientRect().top + window.scrollY))
    
        setBottom((agTimeline.current.getBoundingClientRect().top + window.scrollY)  + agTimeline.current.getBoundingClientRect().height - (agTimelineItems.current[agTimelineItems.current.length-1].querySelector('.js-timeline-card_point-box').getBoundingClientRect().top + window.scrollY))
        
        
        if (f !== agPosY ) {
          setF(agPosY);
          fnUpdateProgress()
        }
        // f !== agPosY && (setF(agPosY), agHeight, fnUpdateProgress())
      }
    
      function fnUpdateProgress() {
        const agTop = agTimelineItems.current[agTimelineItems.current.length-1].querySelector('.js-timeline-card_point-box').getBoundingClientRect().top + window.scrollY
    
        let i = agTop + agPosY - window.scrollY;
        // console.log(agTop, agPosY, window.scrollY)
        let a = (agTimelineLineProgress.current.getBoundingClientRect().top + window.scrollY) + agPosY - window.scrollY;
        setN(agPosY - a + agOuterHeight / 2);
        if (i <= agPosY + agOuterHeight / 2)  setN(i - a)
        // console.log(`i: ${i}, a: ${a}, agTop: ${agTop}, agOuterHeight: ${agOuterHeight}, agPosY: ${agPosY},`)
        // agTimelineLineProgress.current.style.height = n + "px";
    
        const items = agTimelineItems.current;
       
        for (let i = 0; i < items.length; i++) {
          const agTop = items[i].querySelector('.js-timeline-card_point-box').getBoundingClientRect().top + window.scrollY;
          if (agTop + agPosY - window.scrollY < agPosY + 0.5 * agOuterHeight) {
            items[i].classList.add('js-ag-active');
          } else {
            items[i].classList.remove('js-ag-active');
          }
        }
      }


    
      useEffect(() => {
        if (!agFlag) {
          window.requestAnimationFrame(fnUpdateWindow);
        }
        setAgFlag(true);
      }, [agPosY, agHeight])
    
      const addToAgTimelinePoints = (el) => {
        if (el && !agTimelinePoints.current.includes(el)) {
          agTimelinePoints.current.push(el);
        }
      }
    
      const addAgTimelineItems = (el) => {
        if (el && !agTimelineItems.current.includes(el)) {
          agTimelineItems.current.push(el);
        }
        
      }
    
      return (
        <div className="ag-timeline-block">
          <div className="ag-timeline_title-box">
            <div className="ag-timeline_tagline">Timeline</div>
            <div className="ag-timeline_title">No Flex</div>
          </div>
          <section className="ag-section">
            <div className="ag-format-container" >
              <div className="js-timeline ag-timeline" ref={agTimeline}>
                <div className="js-timeline_line ag-timeline_line" ref={agTimelineLine} style={{top: top, bottom: bottom}}>
                  <div className="js-timeline_line-progress ag-timeline_line-progress" ref={agTimelineLineProgress} style={{height: n + 'px'}}></div>
                </div>
                <div className="ag-timeline_list" >
                  {events.map((event) => (
                    <div key={event.id} ref={addAgTimelineItems} className="js-timeline_item ag-timeline_item">
                      <div className="ag-timeline-card_box">
                        <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                          <div className="ag-timeline-card_point">{event.year}</div>
                        </div>
                        {/* <div className="ag-timeline-card_meta-box">
                          <div className="ag-timeline-card_meta">{event.season}</div>
                        </div> */}
                      </div>
                      <div className="ag-timeline-card_item">
                        <div className="ag-timeline-card_inner">
                          {/* <div className="ag-timeline-card_img-box">
                            <img src={event.img} />
                          </div> */}
                          <div className="ag-timeline-card_info">
                            <div className="ag-timeline-card_title">{event.season}</div>
                            <div className="ag-timeline-card_desc">{event.description}</div>
                          </div>
                        </div>
                        {/* <div className="ag-timeline-card_arrow"></div> */}
                      </div>
                    </div>
                  ))}
                  
                </div>
              </div>
            </div>
          </section>
        </div>
      )
}

export default Timeline;