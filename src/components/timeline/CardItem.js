import React from 'react'

const CardItem = ({ event }) => {
  return (
    <div className='ag-timeline-card_item'>
      <div className='ag-timeline-card_inner'>
        <div className='ag-timeline-card_info'>
            <div className='ag-timeline-card_title'>{event.date}</div>
            <div className='ag-timeline-card_desc'> {event.text}
                  </div>
        </div>
      </div>
    </div>
  )
}

export default CardItem
