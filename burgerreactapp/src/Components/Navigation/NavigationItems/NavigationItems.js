import React from "react";
import styleitems from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationitems=(props)=>{
    return (
       <ul className={styleitems.NavigationItems}>
           <NavigationItem link="/" exact>Burger Builder</NavigationItem>
           { props.isauth?
               <NavigationItem link="/orders">Orders</NavigationItem>
               :null}
          { props.isauth?
           <NavigationItem link="/logout">Logout</NavigationItem>
          : <NavigationItem link="/auth">Authenticate</NavigationItem>

          }
           </ul>

    )



}

export default navigationitems;