import ListItem from './ListItem';
import StateBar from './StateBar';
import MainContext from "../../context/main-context";
import './list.css';
import { useContext } from "react";

function List() {
    const CTX = useContext(MainContext);
    return (
        <div className="list">
            <StateBar/>
            {
                CTX.activeAspect.map(country =>
                    <ListItem
                        animation={CTX.fadeIn}
                        classes={CTX.display}
                        aspect={CTX.aspectName}
                        key={country.name.common}
                        name={country.name.common}
                        languages={country.languages}
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