import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import stylesidedrawer from "./SideDrawer.css";
import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sidedrawer=(props)=>{
let sideDrawerClasses=[stylesidedrawer.SideDrawer,stylesidedrawer.Close];
if(props.shown){
    sideDrawerClasses=[stylesidedrawer.SideDrawer,stylesidedrawer.Open];
}
return(
    <Aux> 
        <Backdrop shown={props.shown} clicked={props.cancelled}/>
    <div className={sideDrawerClasses.join(" ")} onClick={props.cancelled}>
        <div className={stylesidedrawer.Logo}>
        <Logo/>    
        </div>
        <nav>
            <NavigationItems isauth={props.isauthenticate}/>
        </nav>
    </div>
    </Aux>
)

}


export default sidedrawer;