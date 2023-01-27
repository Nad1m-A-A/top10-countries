import { useState } from "react";
import classes from '../../../../assets/styles/Main.module.css'
import { BiShow } from 'react-icons/bi'
import { BiHide } from 'react-icons/bi'

function Item(props) {
    const [descOpen, setDescOpen] = useState(false);
    const descClasses = descOpen ? classes.big_desc : classes.description
    const classHandler = () => {
        setDescOpen(prev => !prev);
    }

    const numbersFiller = props.aspect === 'wealthy' ? 'trillion' : props.aspect === 'poor' ? 'billion' : props.aspect === 'at_war' || props.aspect === 'high_salary' ? 'K' : '';
    const dollarSign = props.aspect === 'wealthy' || props.aspect === 'poor' || props.aspect === 'high_salary' ? '$' : '';

    return (
        <div className={props.animation ? `${classes.item_fade_in} ${classes.item}` : classes.item}>
        <div className={classes.flag}>
        <img src={props.flag} alt="country flag"/>
        </div>
        <span className={classes.name}>{props.name}</span>
        <span>{props.continents}</span>
        {/* <span>{Object.values(props.languages)[0].split(' ')[0]}</span> */}
        {<span className={classes.numbers}>{dollarSign}{props.numbers} {numbersFiller}</span>}
        <span className={props.aspect === 'at_war' ? classes.small_desc : descClasses}> {props.description} </span>
        <button className={props.aspect === 'at_war' ? classes.hidden_eye : classes.more_button} onClick={classHandler}>{descOpen ? <BiHide/> : <BiShow/>}</button>
    </div>
    )
}

export default Item;