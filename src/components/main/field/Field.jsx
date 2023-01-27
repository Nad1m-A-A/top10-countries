import MainContext from '../../../context/main-context';
import { useContext } from 'react';
import List from './list/List';
import Cards from './cards/Cards';
import classes from '../../../assets/styles/Main.module.css'

function Field() {
    const CTX = useContext(MainContext);
    const display = CTX.display;

    return (
        <div className={CTX.fadeIn ? `${classes.field_fade_in} ${classes.field}` : classes.field}>
            {display === 'list' &&  <List/>} 
            {display === 'cards' && <Cards/>}
        </div>
    )
}

export default Field;