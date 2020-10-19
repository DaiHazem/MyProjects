import React from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

const ordersummary=(props)=>{
    const finalprice=props.summaryPrice.toFixed(1);
    
   const ingredSummary=Object.keys(props.ingredients).map(el=> { return (<li key={el}> 
   <span style={{textTransform:"capitalize"}}>{el}:{props.ingredients[el]} </span>
   
   </li>)});


    return ( <Aux>

            <h3 style={{textAlign:"center",fontWeight:"bold"}}> Your Order</h3>
            <p> A delicious Burger with the following ingredients:</p>
            <ul>{ingredSummary}</ul>
            <div style={{textAlign:"center" , fontWeight:"bold"}}>Total price: {finalprice}</div>    
            <p> Continue to checkout?</p>
            <Button btntype="Danger" click={props.cancelled}>CANCEL</Button>
            <Button btntype="Success" click={props.continued}>CONTINUE</Button>



    </Aux>)



}


export default ordersummary;