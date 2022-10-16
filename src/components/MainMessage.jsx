import './main-message.css'

function MainMessage(props) {
  return (
    <div className='main main-fade-in'>
        <h3 className="main__message">{props.message}</h3>
    </div>
  )
}

export default MainMessage;