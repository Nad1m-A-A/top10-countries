import MainContext from "../../context/main-context";
import { useContext } from "react";
import classes from '../../assets/styles/Main.module.css'


function DisplaySelect() {
    const CTX = useContext(MainContext);

    const displayHandler = (e) => {
        CTX.setDisplay(e.target.options)
    }

    return (
        <div className={classes.display__options}>
        <label htmlFor="cars">Display:</label>

        <select onChange={displayHandler} name="layout" className={classes.display__options__select}>
            <option value="list" >List</option>
        <option value="cards">Cards</option>
        </select>
        </div>
    )
}

export default DisplaySelect;