import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import * as actionCreators from "../../Store/Actions/Index";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../Components/Burger/Burger";
import Buildcontrols from "../../Components/Burger/BuildControls/BuildControls";
import Modal from "../../Components/UI/Modaal/Modaal";
import Ordersummary from "../../Components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios/axiosinstance";
import Spinner from "../../Components/Spinner/Spinner";
import errorHandler from "../../hoc/errorHandler/errorHandler";
const burgerBuilder=(props)=>{
  const [ordered,setOrderState]=useState(false);
      //state={
     //   purchasable:false,
        //ordered:false,
        //error:false
    //}
    const {onInitializeIngredients}=props;
    useEffect(()=>{
        onInitializeIngredients();

    },[onInitializeIngredients]);
       // axios.get("https://my-react-burger-290e3.firebaseio.com/ingredients.json").then((response)=>{
         //   console.log(response.data);
           // this.setState({ingredients:response.data});
            
        //}).catch(error=>{
          //  this.setState({error:true});
            //console.log(error);
        //});
    

const updatePurchasableStatus=(selectedIngred)=>{
    const purchased= Object.keys(selectedIngred).map(el=>{
        return  selectedIngred[el]
    });
    const sumIngred=purchased.reduce((accum,current)=>{
        return accum+current},0);
        //console.log(sumIngred !==0);

        return sumIngred!==0;
    //this.setState({purchasable: sumIngred!==0});
}

 const orderHandler=()=>{
    if(props.isauth){
        setOrderState(true);
        //this.setState({ordered:true});

    }else{
        props.onSetAuthRedirectPath("/checkout");

       props.history.push("/auth");
    }
}


 const cancelHandler=()=>{
      setOrderState(false);
    //this.setState({ordered:false});
}

 const continueHandler=()=>{
    //const queryparams=[];
    //queryparams.push("price="+this.props.totalcost);
    
    //for(let i in this.props.ings){
      //  queryparams.push(encodeURIComponent(i)+"="+encodeURIComponent(this.state.ingredients[i]));
    
//}
  //  const querystring=queryparams.join("&");
     props.onReorder();
    props.history.push("/checkout");
      //  pathname:"/checkout",
    //    search:"?"+querystring
    //});
}



/*addIngredientHandler=(type)=>{
 const oldIngredientCount=this.state.ingredients[type];
 const newIngredientCount=oldIngredientCount+ 1;
 const oldState={...this.state};
 oldState.ingredients[type]=newIngredientCount;
 const ingredSelectedPrice=ingredientPrices[type];
 oldState.totalPrice+=ingredSelectedPrice;
 this.setState({ingredients:oldState.ingredients,totalPrice:oldState.totalPrice});
 this.updatePurchasableStatus(oldState.ingredients);
}

removeIngredientHandler=(type)=>{
    const oldBurgerCount=this.state.ingredients[type];
    if(oldBurgerCount > 0){
    const newBurgerCount=oldBurgerCount- 1;
    const prevState={...this.state};
    prevState.ingredients[type]=newBurgerCount;
    const ingredRemovedPrice=ingredientPrices[type];
    prevState.totalPrice-=ingredRemovedPrice;
    this.setState({ingredients:prevState.ingredients,totalPrice:prevState.totalPrice});
    this.updatePurchasableStatus(prevState.ingredients);

    }  

}*/

    
         let burger=<Spinner/>;
         let orderSummary=null;
        if(props.ings){
            const disabledInfo={...props.ings};
        for (let property in disabledInfo){
        disabledInfo[property]= disabledInfo[property] === 0;}
       
             burger=(<Aux>
            <Burger 
            ingred={props.ings}/>
          <Buildcontrols ingredientAdded={props.onAddedIngredient} 
            price={props.totalcost}
            ingredientRemoved={props.onRemovedIngredient} 
            disabled={disabledInfo}
            purchase={updatePurchasableStatus(props.ings)} 
           isauthenticated={props.isauth}
            order={orderHandler}/></Aux>);
              
             orderSummary=<Ordersummary 
            cancelled={cancelHandler}
            continued={continueHandler}
             summaryPrice={props.totalcost}
            ingredients={props.ings}/>;
        }
        if(props.error){
            burger=<p style={{textAlign:"center",marginTop:"80px"}}>
                 Ingredients can't be loaded </p>
        }
        //if(this.state.loading){
          //  orderSummary=<Spinner/>;
        //}             
    
     return (
          <Aux>
             <Modal cancel={cancelHandler}
             show={ordered}>
                 {orderSummary}
             </Modal>
               {burger}
              
          </Aux>

     );

    }



const mapStateToProps=state=>{
    return {
        ings:state.burgerbuilder.ingredients,
        totalcost:state.burgerbuilder.totalPrice,
        error:state.burgerbuilder.error,
        isauth:state.auth.token !== null,
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onAddedIngredient:(ingel)=>dispatch(actionCreators.addIngredientAction(ingel)),
        onRemovedIngredient:(ingel)=>dispatch(actionCreators.removeIngredientAction(ingel)),
        onInitializeIngredients:()=>dispatch(actionCreators.initializeIngredientsAction()),
        onReorder:()=>dispatch(actionCreators.orderEndAction()),
        onSetAuthRedirectPath:(path)=>dispatch(actionCreators.authRedirectPathAction(path))   
    }
}

export  default connect(mapStateToProps,mapDispatchToProps)(errorHandler(burgerBuilder,axios));