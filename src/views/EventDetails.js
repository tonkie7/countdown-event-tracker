import { useState, useEffect, useCallback } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

const EventDetails = () => {

  const { id } = useParams()
  const [url, setUrl] = useState('http://localhost:8080/events/' + id)
  const [event, setEvent] = useState('')


  const getEvent = useCallback(async() => {
      const res = await axios.get(url)
      if(res.status === 200) {
        setEvent(res.data)
        // console.log(res.data)
        // console.log(event)
      }
      // console.log(res.data)
    }, [url]
  )

    useEffect(() => {
      getEvent()
    }, [getEvent])

  return (
    <div>
    {
      <div className='container event-list'>
        <Link to='/'><button className='btn-back'><i className="fa-solid fa-arrow-left"></i></button></Link>
        <div className='event-details'>
          <h2>{event.title}</h2>
          <p>{event.desc}</p>
          <p>{ moment(event.timestamp).calendar() }</p>
        </div>
      </div>
    }
    </div>
  )
}

export default EventDetails