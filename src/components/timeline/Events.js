import React from 'react'
import CardBox from './CardBox'
import CardItem from './CardItem'

const Events = ({events})=>  {
  return (
    
    <div className={'ag-timeline_list'}>
        {events.map((event) => (
            <div className='js-timeline_item ag-timeline_item js-ag-active'> 
                <CardBox event={event}/>
                <CardItem event={event}/>
            </div>
        ))}
    </div>
    
    
  )
}

export default Events
