import React from "react";
import styletoolbar from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import Navigationitems from "../NavigationItems/NavigationItems";
import Drawertoggle from "../SideDrawer/DrawerToggle/DrawerToggle";
 
const toolbar=(props)=>{
    return (
    <header className={styletoolbar.Toolbar}> 
        <Drawertoggle  dashbarclicked={props.click}/>
       <div className={styletoolbar.Logo}>
       <Logo/>
       </div>     
       <nav className={styletoolbar.DesktopOnly}>
        <Navigationitems isauth={props.isauthenticate}/>
       </nav>

    </header>
)
}


export default toolbar;