import React from 'react'
import { useContext } from 'react'
import MainContext from '../../context/main-context'
import './modal.css'
import ReactDOM from 'react-dom'

function Modal(props) {
  const CTX = useContext(MainContext);

  function closeModal (){
    CTX.resetError();
  }

  if(!CTX.error) return;

  return ReactDOM.createPortal(
    <>
      <div className='modal' >
        <div className='overlay' onClick={closeModal}/>
        <div className='content'>
        <h3 className='message'>
        {props.content}
        </h3>
        <button className='confirm' onClick={closeModal}>GOT IT!</button>
        </div>
      </div>
    </>,
    document.getElementById('modal')
  )
}

export default Modal