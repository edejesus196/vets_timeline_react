import React from 'react'
import { TimelineCardbox, TimelineCardPoint, TimelineCardPointBox, TimelineMeta, TimelineMetaBox } from './TimelineElements'

const CardBox = ({ event }) => {
  if (event.id % 2 == 0 ) {
    return (
      <TimelineCardbox>
        <TimelineMetaBox>
          <TimelineMeta>{event.date}</TimelineMeta>
        </TimelineMetaBox>
        <TimelineCardPointBox>
          <TimelineCardPoint>{event.year}</TimelineCardPoint>
        </TimelineCardPointBox>
      </TimelineCardbox>
    )
  } else {
    return (
      <TimelineCardbox>
        <TimelineCardPointBox>
          <TimelineCardPoint>{event.year}</TimelineCardPoint>
        </TimelineCardPointBox>
        <TimelineMetaBox>
          <TimelineMeta>{event.date}</TimelineMeta>
        </TimelineMetaBox>
      </TimelineCardbox>
    )
  }
  
}

export default CardBox