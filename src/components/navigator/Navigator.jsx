import React from "react";
import Buttons from "./Buttons";
import DisplaySelect from "./DisplaySelect";

import classes from '../../assets/styles/Main.module.css'

function Navigator() {
    return (
        <div className={classes.navigator}>
            <Buttons/>
            {<DisplaySelect/>}
        </div>
    )
}

export default Navigator