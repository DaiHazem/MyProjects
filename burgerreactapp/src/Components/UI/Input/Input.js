import React from "react";
import styleinput from "./Input.css";
const input=(props)=>{
    let inputelement=null;
    let inputclasses=[styleinput.InputElement];
    let validationerrormessage=null;
    if(props.touchstatus && props.invalid){
        inputclasses.push(styleinput.Invalid);
        if(props.validationerror){
     validationerrormessage=<p className={styleinput.Validation}>{props.validationerror}</p>
    }
    }
    switch(props.inputtype){
        case("input"):
           inputelement=<input className={inputclasses.join(" ")}
            {...props.elementconfig}
            value={props.value} onChange={props.changed}/>;
           break;
           case("select"): 
           inputelement=(<select className={styleinput.InputElement}         
            value={props.value} onChange={props.changed}>
                {props.elementconfig.options.map(option=>{
                   return(
                   <option key={option.value}
                       value={option.value}>
                       {option.displayValue}</option>
                   )
                }
            
                )}
                
            </select>)
           break;
           default:
               inputelement=<input className={styleinput.InputElement} 
               {...props.elementconfig}
            value={props.value} onChange={props.changed}/>
    }
    
    return(
        <div className={styleinput.Input}>
         <label className={styleinput.Label}>{props.label}</label>
         {inputelement}
         {validationerrormessage}
        </div>

    )

}

export default input;