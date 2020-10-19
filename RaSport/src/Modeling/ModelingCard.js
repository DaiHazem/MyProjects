import React from "react";
import stylemodelingcard from "./ModelingCard.css";
const modelcard=(props)=>{
    return(
        <div className={stylemodelingcard.Brandcard}>
        <div className={stylemodelingcard.Header}>
            AS A SECOND CHANCE:
            "IT'S BETTER TO DONATE THAN ACCUMULATE"
        </div>
        <p>What started as an invention for the
            American worker became uniform of progress
        </p>
        <div className={stylemodelingcard.Div2}>
        <button className={stylemodelingcard.Button}> Read More </button> 
        </div>
        </div>
    )

}

export default modelcard;