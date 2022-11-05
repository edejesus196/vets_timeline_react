import React from 'react'
import { TimeCardItem, TimelineCardDesc, TimelineCardInfo, TimelineCardInner, TimelineCardTitle } from './TimelineElements'

const CardItem = ({ event }) => {
  
  return (
    
    <TimeCardItem>
      <TimelineCardInner>
          <TimelineCardInfo>
              <TimelineCardTitle>{event.date}</TimelineCardTitle>
              <TimelineCardDesc>{event.text}</TimelineCardDesc>
          </TimelineCardInfo>
      </TimelineCardInner>
    </TimeCardItem>
 
  )
}

export default CardItem
