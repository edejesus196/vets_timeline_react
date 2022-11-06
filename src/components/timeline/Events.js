import React from 'react'
import CardBox from './CardBox'
import CardItem from './CardItem'
import { TimelineItem, TimelineList } from './TimelineElements'

const Events = ({events})=>  {
  
  
  return (
        
    <TimelineList>
      {events.map((event) => (
            <TimelineItem  >
              <CardBox event={event}/>
              <CardItem event={event}/>
            </TimelineItem>
        ))}
    </TimelineList>
    
    
  )
}

export default Events
