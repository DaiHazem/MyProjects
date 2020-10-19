import React from "react";
import "./Backdrop.css";

const backdrop=(props)=>{

 return ( props.shown?
     <div className="Backdrop" onClick={props.clicked}>

     </div>:null
 );
}


export default backdrop;