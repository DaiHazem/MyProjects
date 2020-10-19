import React from "react";
import stylebackdrop from "./Backdrop.css";

const backdrop=(props)=>{

 return ( props.shown?
     <div className={stylebackdrop.Backdrop} onClick={props.clicked}>

     </div>:null
 );
}


export default backdrop;