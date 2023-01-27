import ListItem from './ListItem';
import StateBar from './StateBar';
import MainContext from '../../../../context/main-context';
import { useContext } from "react";
import classes from '../../../../assets/styles/Main.module.css'


function List() {
    const CTX = useContext(MainContext);
    return (
        <div className={classes.list}>
            <StateBar/>
            {
                CTX.activeAspect.map(country =>
                    <ListItem
                        animation={CTX.fadeIn}
                        classes={CTX.display}
                        aspect={CTX.aspectName}
                        key={country.name.common}
                        name={country.name.common}
                        // languages={country.languages}
                        flag={country.flags.png}
                        continents={country.continents[0]}
                        numbers={country.numbers}
                        description={country.description}
                        />
                )
            }
        </div>
    )
}

export default List;