import React from 'react'
import ReactDOM from 'react-dom'
import { useContext } from 'react'
import MainContext from '../context/main-context'
import classes from '../assets/styles/Main.module.css'

function Modal(props) {
    const CTX = useContext(MainContext);

    function closeModal (){
        CTX.resetError();
    }

    if(!CTX.error) return;

    return ReactDOM.createPortal(
        <>
        <div className={classes.modal} >
            <div className={classes.overlay} onClick={closeModal}/>
            <div className={classes.content}>
            <h3 className={classes.message}>
            {props.content}
            </h3>
            <button className={classes.confirm} onClick={closeModal}>GOT IT!</button>
            </div>
        </div>
        </>,
        document.getElementById('modal')
    )
}

export default Modal