import React from 'react'
import { TimelineLine, TimelineProgress } from './TimelineElements'

const Line = ({ height }) => {
  console.log('from line', height)
  return (
    <TimelineLine>
      <TimelineProgress></TimelineProgress>
    </TimelineLine>
  )
}

export default Line