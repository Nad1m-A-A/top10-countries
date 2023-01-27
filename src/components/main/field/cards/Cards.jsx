import { useContext } from "react";
import MainContext from "../../../../context/main-context"
import Card from "./Card";
import classes from '../../../../assets/styles/Main.module.css'

function Cards() {
    const CTX = useContext(MainContext);

    const aspect = CTX.activeAspect.sort((a,b) => {
        if(a.numbers > b.numbers) return 1;
        if(a.numbers < b.numbers) return -1;
        return 0;
    })

    return (
        <div className={classes.cards}>
            {
                aspect.map((country, index) =>
                    <Card
                    index={CTX.activeAspect.length - index}
                    name={country.name.common}
                    key={country.name.common}
                    languages={country.languages}
                    flag={country.flags.png}
                    continents={country.continents[0]}
                    numbers={country.numbers}
                    >
                    </Card>
                )
            }
        </div>
    )
}

export default Cards;