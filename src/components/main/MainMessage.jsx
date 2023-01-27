import classes from '../../assets/styles/Main.module.css'

function MainMessage(props) {
    return (
        <div className={`${classes.main} ${classes["main-fade-in"]}`}>
            <h3 className={classes.main__message}>{props.message}</h3>
        </div>
    )
}

export default MainMessage;