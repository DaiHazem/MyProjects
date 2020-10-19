import React from "react";

import BurgerLogo from "../../assets/Images/BurgerLogo.png";
import stylelogo from "./Logo.css";

const logo=(props)=>{
    return (
    <div className={stylelogo.Logo} style={{height:props.height}}>
        <img src={BurgerLogo} alt="Burger" title="Burger" ></img>
    </div>
    )

}

export default logo;