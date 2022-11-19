import React from 'react'
import { TimelineCardbox, TimelineCardPoint, TimelineCardPointBox, TimelineMeta, TimelineMetaBox } from './TimelineElements'

const CardBox = ({ event, active}) => {
  console.log('cardbox', active)
  // change sequence order of the even event elements 
  if (event.id % 2 === 0 ) {
    return (
      <TimelineCardbox>
        <TimelineMetaBox>
          <TimelineMeta>{event.date}</TimelineMeta>
        </TimelineMetaBox>
        <TimelineCardPointBox>
          <TimelineCardPoint active={active}>{event.year}</TimelineCardPoint>
        </TimelineCardPointBox>
      </TimelineCardbox>
    )
  } else {
    return (
      <TimelineCardbox>
        <TimelineCardPointBox>
          <TimelineCardPoint active={active}>{event.year}</TimelineCardPoint>
        </TimelineCardPointBox>
        <TimelineMetaBox>
          <TimelineMeta>{event.date}</TimelineMeta>
        </TimelineMetaBox>
      </TimelineCardbox>
    )
  }
  
}

export default CardBox