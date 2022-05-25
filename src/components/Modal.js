import { useState } from 'react'

const Modal = ({ toggleModal, addEvent }) => {

  const [eventTitle, setEventTitle] = useState('')
  const [eventDesc, setEventDesc] = useState('')
  const [eventTimeStamp, setTimeStamp] = useState('') 
  const [error, setError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
     if(eventTitle.length <= 1) {
       console.log('empty')
       setError(true)
       return
     } 
    if(eventDesc.trim() === '') {
      setError(true)
      return
    }
    if(eventTimeStamp.trim() === '') {
      setError(true)
      return
    }

    addEvent(eventTitle, eventDesc, eventTimeStamp)
    toggleModal()
    setError(false)
  }

  const handleClick = e => {
   if(e.target.id === 'modal-bg') {
    toggleModal()
   }
  }
  

  return (
   <div className='modal-bg' id='modal-bg' onClick={handleClick}>
    <div className='modal-wrapper'>
      <div className='button'>
         <button className='btn-close' onClick={toggleModal}> 
        </button> 
      </div>
      <form onSubmit={handleSubmit} className={`add-event-form`}>
        <div className={`title-wrapper ${error ? "error" : ""}`}>
          <label htmlFor='title'>Titel</label>
          <input value={eventTitle} onChange={e => setEventTitle(e.target.value)} type="text" id='title' autoFocus />
          {error && <p className='error-msg'>Minst 2 tecken</p>}
        </div>
        <div className={`desc-wrapper ${error ? "error" : ""}`}>
          <label htmlFor='desc'>Beskrivning</label>
          <textarea value={eventDesc} onChange={e => setEventDesc(e.target.value)} rows='4' type="text" id='desc'/>
          {error && <p className='error-msg'>Eventet måste ha en beskrivning</p>}
        </div>
        <div className={`date ${error ? "error" : ""}`}>
          <label htmlFor='timestamp'>Välj datum och tid</label>
          <input value={eventTimeStamp} onChange={e => setTimeStamp(e.target.value)} type="datetime-local" id='timestamp' />
          {error && <p className='error-msg'>Vänligen välj ett datum</p>}
        </div>
        <div className='button'>
          <button className='btn-add'>Lägg till event</button>
        </div>
      </form>
    </div>
   </div>

  )
}

export default Modal