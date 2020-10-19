import React from "react";
import stylespinner from "./Spinner.css";

const spinner=()=>{
    return(
        <div className={stylespinner.Loader}>
            Loading...</div>
    )
}

export default spinner;