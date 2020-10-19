import React, {useEffect} from "react";
import * as actioncreators from "../../../Store/Actions/Index";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const logout=(props)=> {
const {onlogout}=props;
    useEffect(()=>{
        onlogout()

    },[onlogout]);
    
        return <Redirect to="/"/>
    }


const mapDispatchToProps=(dispatch)=>{
    return{
        onlogout:()=>dispatch(actioncreators.logOutAction())

    }
}

export default  connect(null,mapDispatchToProps)(logout);