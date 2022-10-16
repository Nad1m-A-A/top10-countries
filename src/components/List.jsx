import ListItem from './ListItem'
import StateBar from './StateBar';
import { useContext } from "react"
import MainContext from "../context/main-context"

function List() {
    const CTX = useContext(MainContext);

    const aspect = CTX.sortingState === 'random' ? CTX.activeAspect : CTX.sortedAspect;
    return (
        <div className="list">
            <StateBar/>
            {
                aspect.map(country =>
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