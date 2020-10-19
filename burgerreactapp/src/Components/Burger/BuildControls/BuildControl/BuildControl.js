import React from "react";
import stylebuildcontrol from "./BuildControl.css";


const buildcontrol=(props)=>{

return (
<div className={stylebuildcontrol.BuildControl}>
<label className={stylebuildcontrol.Label}> {props.label}</label>
<button className={stylebuildcontrol.Less} onClick={props.remove} disabled={props.disable}>Less</button>
<button className={stylebuildcontrol.More} onClick={props.add}>More</button>
</div>
);



}





export default buildcontrol;
/* <div className={stylebuildcontrols.buildcontrols}>
   { availableIngred.map(el=>{<Buildcontrol key={el.label} 
    label={el.label}
    add={()=>props.ingredientAdded(el.type)}/> 
    })

}

        </div>
    


}*/