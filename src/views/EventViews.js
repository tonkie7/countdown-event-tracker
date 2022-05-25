import React from 'react'
import axios from 'axios'
import EventItem from '../components/EventItem'

const EventViews = ({ events, toggleModal }) => {

  return (
    <div className='container event-list'>
       {
         events.length ? events.map(event => (
           <EventItem event={event} key={event.id}/>
         )) 
         : <div className='no-events'>
           <h3>Du har inga events på gång!</h3>
           <button className='btn-create' onClick={toggleModal}>Skapa ett event</button>
          </div> 
       }
    </div>
  )
}

export default EventViews