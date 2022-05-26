import { useState, useEffect, useCallback } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header';
import Modal from './components/Modal';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'
import EventDetails from './views/EventDetails'
import EventViews from './views/EventViews';


function App() {

  const [events, setEvents] = useState([])
  const [url, setUrl] = useState('http://localhost:8080/events')
  // console.log(events)

  const getEvents = useCallback(async () => {
    const res = await axios.get(url)

    if(res.status === 200) {
      setEvents(res.data)
    }
  }, [url])

  useEffect(() => {
    getEvents()
  }, [getEvents])
 

  const addEvent = async (title, desc, timestamp) => {
    // console.log('added')
    // console.log(events)
    const req = {
      title,
      desc,
      id: uuidv4(),
      timestamp,
    }
    
    const res = await axios.post(url, req)
    setEvents(state => {
      // console.log(res.data)
      return [res.data, ...state]
    })
    // getEvents()
  }

  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
   }
   
  return (
    <div>
      <Header toggleModal={toggleModal} />
        <Routes>
          <Route path='/' element={ <EventViews events={events} toggleModal={toggleModal}/> } />
          <Route path='/events/:id' element={ <EventDetails /> } />
        </Routes>
      { modal && 
      <Modal toggleModal={toggleModal} addEvent={addEvent} />
    }
    </div>
  );
}

export default App;
