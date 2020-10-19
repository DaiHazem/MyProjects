import React from "react";
import styleorder from "./Order.css";
const order=(props)=>{
   // console.log(props.ingredients);
   const ingreds=[];
   for(let ingredient in props.ingredients){
       ingreds.push({type:ingredient,
                     amount:props.ingredients[ingredient]});

   }
   const output=ingreds.map(el=>{
   return <span key={el.type} className={styleorder.Span}>
       {el.type} ({el.amount})</span>
   })
return(
    <div className={styleorder.Order}>
     <p>Ingredients: {output}</p>
     <p>Price: <strong>{props.price} $ </strong></p>
    </div>
)
}
export default order;