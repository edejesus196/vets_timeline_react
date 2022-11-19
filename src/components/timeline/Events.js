import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CardBox from './CardBox'
import CardItem from './CardItem'
import { TimelineItem, TimelineList } from './TimelineElements'

const Events = ({events, agPosY, agOuterHeight, agTop})=>  {
  const [active, setActive] = useState(false)
  console.log('events', agPosY, agOuterHeight, agTop)

  const changeActive = () => {
    if ((agTop + agPosY - window.pageYOffset) < agPosY + .5 * agOuterHeight) {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  useEffect(() => {
    changeActive()
    console.log('test change active')
  }, [events])


  return (
        
    <TimelineList>
      {events.map((event) => (
            <TimelineItem  active={active}>
              <CardBox active={active} event={event}/>
              <CardItem active={active} event={event}/>
            </TimelineItem>
        ))}
    </TimelineList>
    
    
  )
}

export default Events
