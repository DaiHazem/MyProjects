import React from "react";
import RaLogo from "../assets/Images/ralogo.png";
import stylelogo from "./Logo.css";
const logo =(props)=>{
return (
    <div className={stylelogo.Logo}>
    <img src={RaLogo} alt="Ra Brand Logo"/>
    </div>
)
}
export default logo;