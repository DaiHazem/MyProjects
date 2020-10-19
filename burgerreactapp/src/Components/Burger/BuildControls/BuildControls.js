import React from "react";
import stylebuildcontrols from "./BuildControls.css";
import Buildcontrol from "../BuildControls/BuildControl/BuildControl";


const availableIngred=[

                    {label:"Salad" , type:"salad"},
                    {label:"Meat" , type:"meat"},
                    {label:"Cheese" , type:"cheese"},
                    {label:"Bacon" , type:"bacon"},

];


const buildcontrols=(props)=>{
    //console.log(props.purchase,props.price);
   const Ingredientbox= availableIngred.map(el=>{ return <Buildcontrol key={el.label} label={el.label}
    add={()=>props.ingredientAdded(el.type)} 
    remove={()=>props.ingredientRemoved(el.type)} disable={props.disabled[el.type]} />
    });

    return (
        <div className={stylebuildcontrols.buildcontrols}>
            <p>Current Price: <strong>{props.price.toFixed(1)}</strong></p>
            {Ingredientbox}
        <button className={stylebuildcontrols.OrderButton}
         onClick={props.order}
        disabled={!props.purchase}>
            {props.isauthenticated? "ORDER NOW" :"SIGN UP TO ORDER"}</button>
        </div>
    )


}






export default buildcontrols;