import React from "react";
import CheckOutSummary from "../../Components/checkOutSummary/checkOutSummary";
import ContactData from "./ContactData/ContactData";
import {connect} from "react-redux";
import {Route,Redirect} from "react-router-dom";
const checkout =(props)=>{
//    state={
  //      ingredients:null,
    //    totalprice:0
//}
  //  componentWillMount(){
    //    const query=new URLSearchParams(this.props.location.search);
      //  const ingredient={};
        //let price=0;
        //for( let param of query.entries()){
          //  if(param[0] ==="price"){
            //    price=param[1]

            //}else{
            //ingredient[param[0]]= + param[1];
        //}
    //}
      //  this.setState({ingredients:ingredient, totalprice:price});
    //}
     const cancelHandler=()=>{
        props.history.goBack();
    }
    const continueHandler=()=>{
        props.history.replace("/checkout/contact-data");
    }
    
      let summary=<Redirect to="/"/>

      if(props.ings){
        const ordering=props.purchased? <Redirect to="/"/>:null;
        summary=(<div>
                 {ordering}
                <CheckOutSummary
                cancel={cancelHandler}
                continue={continueHandler}
                ingredients={props.ings}/>
                <Route path={props.match.path + "/contact-data"}
                  component={ContactData}/> 
        </div>

        )
      }
        return   summary;
    }

//render={(props)=>{return(<ContactData
    //{...props} ingredients={this.state.ingredients}
    //totalprice={this.state.totalprice}
    ///>)}}/>

const mapStateToProps=state=>{
    return{
        ings:state.burgerbuilder.ingredients,
        price:state.burgerbuilder.totalPrice,
        purchased:state.order.purchased
    }
}

export default connect(mapStateToProps)(checkout);