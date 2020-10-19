import React from "react";

import styledrawertoggle from "./Drawertoggle.css";

const drawertoggle=(props)=>{
    return (
        <div className={styledrawertoggle.DrawerToggle}
        onClick={props.dashbarclicked}>
          <div></div>
          <div></div>
          <div></div> 

        </div>
    )
}

export default drawertoggle;