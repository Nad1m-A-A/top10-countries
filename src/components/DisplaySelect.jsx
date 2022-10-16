import { useContext } from "react";
import MainContext from "../context/main-context";

function DisplaySelect() {
    const CTX = useContext(MainContext);


    const displayHandler = (e) => {
        CTX.setDisplay(e.target.options)
    }

    return (
        <div className="display__options">
        <label htmlFor="cars">Display:</label>

        <select onChange={displayHandler} name="layout" className="display__options__select">
            <option value="list" >List</option>
        <option value="cards">Cards</option>
        </select>
        </div>
    )
}

export default DisplaySelect