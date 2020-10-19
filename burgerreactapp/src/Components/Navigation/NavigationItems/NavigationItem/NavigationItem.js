import React from "react";
import styleitem from "./NavigationItem.css";
import {NavLink} from "react-router-dom";


const navigationitem=(props)=>{
    return (
        <li  className={styleitem.NavigationItem}>
            <NavLink  exact={props.exact}
            activeClassName={styleitem.active}
             to={props.link}>
                {props.children}</NavLink>
            </li>
    )
    //className={props.active ? styleitem.active:null}

}


export default navigationitem;