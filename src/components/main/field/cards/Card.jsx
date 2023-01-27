import { useContext } from "react"
import MainContext from "../../../../context/main-context"
import classes from '../../../../assets/styles/Main.module.css'


function Card(props) {
    const CTX = useContext(MainContext);

    const stringSorter = () => {
        let text;
        if(CTX.aspectName === 'wealthy' || CTX.aspectName === 'poor') text = 'GDP';
        if(CTX.aspectName === 'intelligent') text = 'AVG IQ';
        if(CTX.aspectName === 'at_war') text = 'Fatalities';
        if(CTX.aspectName === 'dangerous') text = 'Crime Index';
        if(CTX.aspectName === 'high_salary') text = 'AVG Income';

        return text;
    }

    const numbersFiller = CTX.aspectName === 'wealthy' ? 'trillion' : CTX.aspectName === 'poor' ? 'billion' : CTX.aspectName === 'at_war' ? 'K' : '';
    const dollarSign = CTX.aspectName === 'wealthy' || CTX.aspectName === 'poor' || CTX.aspectName === 'high_salary' ? '$' : '';

    return (
        <>
            <div className={`${classes.card} ${classes.card_fade_in}`}>
                <div className={classes.order}>{props.index} - {props.name}</div>
                <div className={classes.flag}>
                <img src={props.flag} alt="country flag"/>
                </div>
                <span>Continent: {props.continents}</span>
                <span>Language: {Object.values(props.languages)[0]}</span>
                {<span>{stringSorter()}: <span className={classes.numbers}>{dollarSign}{props.numbers} {numbersFiller}</span></span>}
            </div>
        </>
    )
}

export default Card;