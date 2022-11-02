import React from 'react'

const CardBox = ({ event }) => {
  return (
    <div className='ag-timeline-card_box'>
        <div className='js-timeline-card_point-box ag-timeline-card_point-box'>
            <div className='ag-timeline-card_point'>{event.year}</div>
        </div>
        <div className='ag-timeline-card_meta-box'>
            <div className='ag-timeline-card_meta'>{event.date}</div>
        </div>
    </div>
  )
}

export default CardBox