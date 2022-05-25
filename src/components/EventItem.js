import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/sv'

const EventItem = ({ event }) => {
  // console.log(event.desc)
  // console.log(event.id)
  return (
    <Link to={`/events/${event.id}`} className='event-item-wrapper'>
      <div className='event-items'>
        <p className='event-item'>{ event.title }</p>
        <p className='event-timer'>{ moment(event.timestamp).fromNow() }</p>
      </div>
    </Link>
  )
}

export default EventItem