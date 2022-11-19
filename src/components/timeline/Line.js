import React from 'react'
import { TimelineLine, TimelineProgress } from './TimelineElements'

const Line = ({ top, bottom, n }) => {
  console.log('line section', top, bottom)
 

  return (
    <TimelineLine style={{top: top, bottom: bottom}}>
      <TimelineProgress style={{height: n + "px"}}></TimelineProgress>
    </TimelineLine>
  )
}

export default Line