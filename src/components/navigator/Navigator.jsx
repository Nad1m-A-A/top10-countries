import './navigator.css';
import React from "react";
import Buttons from "./Buttons";
import DisplaySelect from "./DisplaySelect";

function Navigator() {
    return (
        <div className='navigator'>
            <Buttons/>
            {<DisplaySelect/>}
        </div>
    )
}

export default Navigator