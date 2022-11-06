import React from 'react'
import { TimelineLine, TimelineProgress } from './TimelineElements'

const Line = ({ top, bottom }) => {
  console.log('line section', top, bottom)
  const myComponentStyle = {
    top: top,
    bottom: bottom,
  }

  return (
    <TimelineLine style={{top: top, bottom: bottom}}>
      <TimelineProgress></TimelineProgress>
    </TimelineLine>
  )
}

export default Line