import { buttonsContext } from '../../assets/data';
import MainContext from '../../context/main-context';
import { useContext} from 'react';
import classes from '../../assets/styles/Main.module.css'

function Buttons() {
    const CTX = useContext(MainContext);

    const aspectHandler = (e) => {
        CTX.setLoading();
        CTX.fetchData(e.target.getAttribute('text').toLowerCase());
    }

    return (
        <div className={classes.btns__wrapper}>
            {buttonsContext.map((text,index) => {
                return <button key={index} className={text.toLocaleLowerCase() === CTX.aspectName && !CTX.loading ? `${classes.btn__active} ${classes.btn}` : classes.btn} text={text} onClick={aspectHandler}>{text.split('_').join(' ')}</button>
            })}
        </div>
    )
}

export default Buttons;