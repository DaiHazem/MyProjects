import React from "react";
import stylenavigationitem from "./Navigationitem.css";

const navigationitem=(props)=>{
    return (
        <li className={stylenavigationitem.NavigationItem}>
          {props.children}
        </li>
    )


}

export  default navigationitem;