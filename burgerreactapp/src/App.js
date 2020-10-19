import React, { useEffect, Suspense} from 'react';
import Layout from "./Components/Layout/Layout";
import './App.css';
//import asynchComponent from "./hoc/Asynchcode/Asynch";
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import {Route, Switch,withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import * as actioncreator from "./Store/Actions/Index";
import Logout from "./Containers/Authentication/LogOut/LogOut";


/*const asynchcheckout=asynchComponent(()=>{
  return import ("./Containers/checkOut/checkOut");
})

const asynchorder=asynchComponent(()=>{
  return import ("./Containers/Orders/Orders");
})

const asynchauth=asynchComponent(()=>{
  return import ("./Containers/Authentication/Auth");
})*/

const Asynchcheckout=React.lazy(()=>{
  return import ("./Containers/checkOut/checkOut");
})

const Asynchorder=React.lazy(()=>{
  return import ("./Containers/Orders/Orders");
})

const Asynchauth=React.lazy(()=>{
  return import ("./Containers/Authentication/Auth");
})


const app =(props)=> {
  const {onCheckAuth}=props;

  useEffect(()=>{
    onCheckAuth();

  },[onCheckAuth]);
  
    let routes=(
      <Switch>
          <Route path="/auth" render={(props)=><Asynchauth {...props}/>}/>
          <Route path="/" exact component={BurgerBuilder}/>
          <Redirect to="/"/>
      </Switch>)

             if(props.isAuthenticate){
               routes=(
                 <Switch>
          <Route path="/" exact component={BurgerBuilder}/>
          <Route path="/checkout" render={(props)=><Asynchcheckout {...props}/>}/>
          <Route path="/orders" render={(props)=> <Asynchorder {...props}/>}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/auth" render={(props)=><Asynchauth {...props}/>}/>

          <Redirect to="/"/>
                 </Switch>
               )
             }
    
    return (
      <div>
        <Layout >
          
          <Suspense fallback={<p>loading ...</p>}> {routes} </Suspense> 
        </Layout>
       
      </div>
    );
  }

const mapStateToProps=(state)=>{
  return{
    isAuthenticate:state.auth.token !==null
  }

}
const mapDispatchToProps=(dispatch)=>{
  return {
    onCheckAuth:()=>dispatch(actioncreator.authLoginAdjustmentAction())
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(app));
