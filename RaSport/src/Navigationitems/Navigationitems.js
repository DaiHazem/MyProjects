import React from "react";
import Navigationitem from "./Navigationitem/Navigationitem";
import stylenavigationitems from "./Navigationitems.css";

const navigationitems=(props)=>{
    const navlinks=["Brands","AboutRa","Stores","RaNews","Contact us","Join us"]
    
    const navigationitem = navlinks.map(el=>{
        return <Navigationitem key={el}> {el} </Navigationitem>
    })
    return (
        <ul className={stylenavigationitems.NavigationItems}>
            {navigationitem}

        </ul>
    )

}

export default navigationitems;
