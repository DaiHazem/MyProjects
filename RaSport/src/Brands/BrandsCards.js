import React from "react";
import stylebrandcard from "./BrandsCards.css";
const brandcard=(props)=>{
    return(
        <div className={stylebrandcard.Brandcard}>
        <figure className={stylebrandcard.Logos}>{props.children}</figure>
        <p>What started as an invention for the
            American worker became uniform of progress
        </p>
        <div>
        <button className={stylebrandcard.Button}> Let's Shop </button> <span className={stylebrandcard.Span}>Our story</span>
        </div>
        </div>
    )

}

export default brandcard;