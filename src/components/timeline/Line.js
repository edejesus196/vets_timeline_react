import React from 'react'

const Line = ({ height }) => {
  console.log('from line', height)
  return (
    <div className='js-timeline_line ag-timeline_line'>
        <div className='js-timeline_line-progress ag-timeline_line-progress'></div>
    </div>
  )
}

export default Line