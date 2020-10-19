import React, { useState } from 'react';
import Spinner from "../../../Components/Spinner/Spinner";
import Button from "../../../Components/UI/Button/Button";
import classes from './ContactData.css';
import {connect} from "react-redux";
import *  as actionCreators from "../../../Store/Actions/Index";
import errorHandler from "../../../hoc/errorHandler/errorHandler"; 
import axios from "../../../axios/axiosinstance";
import Input from "../../../Components/UI/Input/Input";
const contactData =(props)=> {
    const [orderform,setOrderform]=useState(
         {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validationrules:{
                    required:true,
                    minlength:3
                },
                valid:false,
                touched:false,
                errormessage: "The value must be greater than 3 letters"
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validationrules:{
                    required:true

                },
                valid:false,
                touched:false,
                errormessage:"Please enter a valid value"
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: "number",
                    placeholder: 'ZIP Code'
                },
                value: '',
                validationrules:{
                    required:true,
                    maxlength:5,
                    minlength:1

                },
                valid:false,
                touched:false,
                errormessage:"Value must be from 1 to 5 digits"
                
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validationrules:{
                    required:true

                },
                valid:false,
                touched:false,
                errormessage:"Please enter a valid value"


            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'e-mail',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validationrules:{
                    required:true

                },
                valid:false,
                touched:false,
                errormessage: "Your email must be as: example@example.com"

            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'fastest',
               validationrules:{},
                valid:true
            }
        });
        const [formisvalid,setFormValidity]=useState(false);
        
    
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

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

  
  
    }
     return isValid;
    }
    const changeHandler=(event,changedelement)=>{
        const updatedorder={...orderform};
        const updatedelement= {...updatedorder[changedelement]}
        updatedelement.value=event.target.value;
        updatedelement.valid=checkvalidity(updatedelement.value,updatedelement.validationrules);
        updatedelement.touched=true;
        updatedorder[changedelement]=updatedelement;

        let formvalidity=true;
        for(let element in updatedorder){
           // console.log(formvalidity ,updatedorder[element].valid);
            if(updatedorder[element].valid && formvalidity){
                formvalidity=true;
            }else{ formvalidity=false;}
        }
        setFormValidity(formvalidity);
        setOrderform(updatedorder);
        //this.setState({orderform:updatedorder, formisvalid:formvalidity});
        //console.log(updatedorder);
    }
    const orderHandler=(event)=>{
        event.preventDefault();
        const orderoutput={};
        for(let key in orderform){
            orderoutput[key]=orderform[key].value;
        }
       // console.log(this.props.ingredients);
        //console.log(this.props.totalprice);
       // this.setState({loading:true});
    const order={
        ingredients:props.ings,
        price:props.price,
        ordersubmitted:orderoutput,
        userId:props.userId
    }
    props.onOrderPurchased(order,props.token);
    //alert("You Ordered");
    //axios.post("/order.json",order).then(response=>{
      //  this.setState({loading:false});
        //this.props.history.push("/");
    //}).catch(error=>{
      //  console.log(error);
      //this.setState({loading:false});

    //})
    }

        let inputinfo=[];
        for(let key in orderform){
            inputinfo.push({
                id:key,
                keyvalue: orderform[key]
            });
        }
        const inputoutput= inputinfo.map(el=>{
            return(
                <Input inputtype={el.keyvalue.elementType}
                elementconfig={el.keyvalue.elementConfig}
                value={el.keyvalue.value}
                key={el.id}
                validationerror={el.keyvalue.errormessage}
                invalid={!el.keyvalue.valid}
                touchstatus={el.keyvalue.touched}
                changed={(event)=>changeHandler(event,el.id)}/>
            )
        })

        let form = (
            <form onSubmit={orderHandler}>
                {inputoutput}
                <Button  disabled={!formisvalid}btntype="Success">ORDER</Button>
            </form>
        );
        if(props.loading){
            form=<Spinner/>
        }
        
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }

const mapStateToProps= state=>{
    return{
        ings:state.burgerbuilder.ingredients,
        price:state.burgerbuilder.totalPrice,
        loading:state.order.loading,
        token:state.auth.token,
        userId:state.auth.userId
    }
}
    const mapDispatchToProps=dispatch=>{
        return{
            onOrderPurchased:(orderdata,token)=>dispatch(actionCreators.orderFormSentAction(orderdata,token))
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(errorHandler(contactData,axios));