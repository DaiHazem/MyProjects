import React from "react";
import Aux from "../../hoc/Auxiliary";
import Logo from "../../Logo/Logo";
import Backdrop from "../../Backdrop/Backdrop";
import Navigationitems from "../../Navigationitems/Navigationitems";
import stylesidedrawer from "./Sidedrawer.css";

const sidedrawer=(props)=>{
    let styleClasses=[stylesidedrawer.Sidedrawer,stylesidedrawer.Closed];
    if (props.show){
        styleClasses=[stylesidedrawer.Sidedrawer,stylesidedrawer.Opened];
    }

    return (
        <Aux>
            <Backdrop shown={props.show} closed={props.cancelled}/>
            <div className={styleClasses.join( " " )} onClick={props.cancelled}>
                <div className={stylesidedrawer.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <Navigationitems/>
                </nav>
                <button className={stylesidedrawer.Button}>Login</button>    

            </div>
        </Aux>

    )
}
 


export default sidedrawer;