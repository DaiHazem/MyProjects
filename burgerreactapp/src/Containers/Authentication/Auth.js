import React ,{useState,useEffect} from "react";
import Input from "../../Components/UI/Input/Input";
import styleauth from "./Auth.css";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserCheck} from '@fortawesome/free-solid-svg-icons'
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'
import Spinner from "../../Components/Spinner/Spinner";
import * as actioncreator from "../../Store/Actions/Index";
const auth =(props)=>{
const [authcontrols,setAuthControls]=useState(
           {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validationrules:{
                    required:true,
                    isEmail:true
                },
                valid:false,
                touched:false
           },
           password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Your Password'
            },
            value: '',
            validationrules:{
                required:true,
                minlength:8,
                maxlength:15,
                isNumeric:true
            },
            valid:false,
            touched:false,
       }
    });
    const [isSignIn,setSigningState]=useState(true);
   // isSignIn:true


const checkvalidity=(value,rules)=>{
    // if(!rules){
      //   return true;
     //}
  let isValid=true;
  if(rules.required){
      isValid=value.trim() !== "" && isValid
  }
  if(rules.minlength){
      isValid=value.length >= rules.minlength && isValid
  }
  if(rules.maxlength){
     isValid=value.length <= rules.maxlength && isValid
  }
     if (rules.isEmail) {
         const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
         isValid = pattern.test(value) && isValid
          
        }

     if (rules.isNumeric) {
         const pattern = /^\d+$/;
         isValid = pattern.test(value) && isValid
     }

 
  return isValid;
 }

  const switchHandler=()=>{
    setSigningState(false);
   // this.setState({isSignIn:false});
 }
  const defaultHandler=()=>{
     setSigningState(true);
     //this.setState({isSignIn:true});
 }

 const changeHandler=(event,propname)=>{
     const updatedstate={
         ...authcontrols,
        [propname]:{
            ...authcontrols[propname],
        value: event.target.value,
        touched:true,
        valid:checkvalidity(event.target.value,authcontrols[propname].validationrules)
        }

     }
     setAuthControls(updatedstate);
//  this.setState({authcontrols:updatedstate});
 }

  const submitHandler=(event)=>{
     event.preventDefault();
     props.onAuthSubmit(authcontrols.email.value,authcontrols.password.value,isSignIn)
 }
 const {buildingburger,authredirectpath,onSetAuthRedirectPath}=props;

 useEffect(()=>{
    if(!buildingburger&& authredirectpath!=="/"){
        onSetAuthRedirectPath();}
    },[buildingburger,authredirectpath,onSetAuthRedirectPath])
 
        let submitclasses=[styleauth.Buttons,styleauth.Submit];
        let signinclasses=[styleauth.Buttons,styleauth.Signin];
        let signupclasses=[styleauth.Buttons,styleauth.Signup,styleauth.Opac];
        if(!isSignIn){
            signinclasses.push(styleauth.Opac);
            signupclasses.pop();
        }
        let inputinfo=[];
        for(let key in authcontrols){
            inputinfo.push({
                id:key,
                keyvalue: authcontrols[key]
            });
        }
        let formoutput=inputinfo.map(el=>{
            return(
                <Input inputtype={el.keyvalue.elementType}
                elementconfig={el.keyvalue.elementConfig}
                value={el.keyvalue.value}
                key={el.id}
                invalid={!el.keyvalue.valid}
                touchstatus={el.keyvalue.touched}
                changed={(event)=>changeHandler(event,el.id)}/>
            )
        })
        if(props.loading){
            formoutput=<Spinner/>
        }
        let errormessage=null;
        if(props.error){
            errormessage=(
            <p style={{color:"darkred"}}>{props.error.message}</p>
            )

        }
        let authoutput=null;
        if(props.isauth){
         authoutput=<Redirect to={props.authredirectpath}/>
        }
        return (
            <div className={styleauth.Auth}>
                {authoutput}
                {errormessage}
                <form onSubmit={submitHandler}>
                    {formoutput}
                    
                    <button  className={submitclasses.join(" ")}>Submit</button>
                </form>
                    <button className={signinclasses.join(" ")} onClick={defaultHandler}><FontAwesomeIcon icon={faUserCheck}/>  SignIn</button>
                    <button   className={signupclasses.join(" ")} onClick={switchHandler}><FontAwesomeIcon icon={faUserPlus}/> SignUp</button>
                    
            </div>
        )
    }


const mapStateToProps=(state)=>{
  return{
      loading:state.auth.loading,
      error:state.auth.error,
      isauth:state.auth.token !==null,
      buildingburger:state.burgerbuilder.building,
      authredirectpath:state.auth.authredirectpath
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
      onAuthSubmit:(email,password,signin)=>dispatch(actioncreator.authProcessAction(email,password,signin)),
      onSetAuthRedirectPath:()=>dispatch(actioncreator.authRedirectPathAction("/"))
     }
}
export default connect(mapStateToProps,mapDispatchToProps)(auth);