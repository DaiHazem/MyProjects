import React from "react";
import stylebutton from "./Button.css";

const button=(props)=>{
    return(
    <button disabled={props.disabled} onClick={props.click} className={[stylebutton.Button,stylebutton[props.btntype]].join(" ")}>
        {props.children} 
    </button>

    )


}

export default button;