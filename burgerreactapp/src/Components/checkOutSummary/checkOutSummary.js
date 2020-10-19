import React from "react";
import Burger from "../Burger/Burger";
import Button from "../UI/Button/Button";
import stylecheckoutsummary from "./checkOutSummary.css";


const checkoutsummary=(props)=>{

    return(
        <div className={stylecheckoutsummary.Summary}>
            <h1>We hope it tastes well</h1>
            <div style={{width:"100%",margin:"auto"}}>
            <Burger ingred={props.ingredients}/>
            </div>
            <Button click={props.cancel} btntype="Danger">CANCEL</Button>
            <Button click={props.continue}btntype="Success">CONTINUE</Button>
        </div>
    )


}

export default checkoutsummary;