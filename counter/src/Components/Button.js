import React from "react";
import "./Button.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const button=(props)=>{
    return ( 
        <button disabled={props.disabled} onClick={props.clicked} className={props.className}>
        <FontAwesomeIcon className="Fontawesome" icon={props.btnName==="Increase"?faPlusSquare:props.btnName==="Decrease"?faMinusSquare:props.btnName==="Reset"?faEraser:faCheckSquare} />

            {props.btnName}</button>


    )

    

}

export default button;