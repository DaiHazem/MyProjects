import React ,{useEffect,useRef,useState} from "react";
import "./Counter.css";
import {Form} from "react-bootstrap";
import Button from "../Components/Button";
import { connect } from "react-redux";
import * as actionCreators from "../Store/index";
import Modal from "../Components/Modaal/Modaal";
const Counter=(props)=>{
    const inputRef=useRef();
    const [show,setModal]=useState(false);
    const [enteredValue,setValue]=useState("0");
    const [incNumber,setNumber]=useState(0);
    const [decNumber,setDec]=useState(0);

    useEffect(()=>{
        props.onLoad();
    },[])

    useEffect(()=>{
        setTimeout(()=>{
          // console.log(inputRef.current.value)
        if(inputRef.current.value===enteredValue){
        props.onSlide(enteredValue,props.dis);
        }
        },2000)
    },[enteredValue,inputRef])

    const sliderHandler=(e)=>{
        setValue(e.target.value);
    }
    const incHandler=()=>{
        setNumber(incNumber+1);
        let check=Number.isInteger(incNumber/2);
        if(!check&&decNumber===incNumber+2){
           setModal(true);
       }
      props.onInc(props.counterData,props.dis,true);
    }
    const resHandler=()=>{
        props.onRes(props.dis);
    }
    const decHandler=()=>{
        setDec(decNumber+1);
        let checker=Number.isInteger(incNumber/2);
        if(!checker&&decNumber===incNumber){
            setModal(true);
        }
        props.onDec(props.counterData,props.dis,true);
    }
    
      const cancelHandler=()=>{
       setModal(false);
     }

     window.addEventListener("keydown",(event)=>{
         if(event.ctrlKey&&event.key==="ArrowLeft"){
                 props.onDec(props.counterData,false,false);
                }
        if(event.ctrlKey&&event.key==="ArrowRight"){
                 props.onInc(props.counterData,false,false);
   }
     })

    let screen=props.dis?props.extraCounterData:props.counterData
return ( <div className={props.dis&&props.extraCounterData>0?"RightWrapper Red":
 props.dis&&props.extraCounterData<0?"RightWrapper Green"
 :props.counterData>0&&!props.dis?"Wrapper Red":props.counterData<0&&!props.dis?"Wrapper Green":
 props.dis?"RightWrapper":"Wrapper"}>
    <h1>Counter</h1>
   <div className="Screen">{screen}</div>
    <Button disabled={props.dis?true:false} clicked={incHandler} className={props.dis?"Buttons Dis Inc":"Buttons Inc"} btnName="Increase"/>
    <Button disabled={props.dis?true:false} clicked={resHandler} className={props.dis?"Buttons Res Dis":"Buttons Res" }btnName="Reset"/>
    <Button disabled={props.dis?true:false} clicked={decHandler}  className={props.dis?"Buttons Dec Dis":"Buttons Dec" } btnName="Decrease"/>
    <br/>
    <Form >
  <Form.Group controlId="formBasicRangeCustom">
    <Form.Label>1-100</Form.Label>
    <Form.Control value={enteredValue}
     ref={inputRef} min="1" max="100" 
     className={props.dis?"DisabledSlider":null}
    onChange={props.dis?null:(event)=>sliderHandler(event)} type="range" custom />
  </Form.Group>
</Form>

    
    <div onClick={incHandler} className="Mob Operation">Increase</div>
    <div onClick={resHandler} className="Mob Reset">Reset</div>
    <div onClick={decHandler} className="Mob Operation">Decrease</div>
    <Modal cancel={cancelHandler}
      show={show}>
          <p>Increment occured n times and decrement occured n+1 times where n is an odd number</p>
      </Modal>
</div>

)


}
const mapStateToProps=state=>{
    return {
    counterData:state.counter.counterData,
    extraCounterData:state.counter.extraCounterData

    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onInc:(data,counter,status)=>dispatch(actionCreators.incAction(data,counter,status)),
        onDec:(data,counter,status)=>dispatch(actionCreators.decAction(data,counter,status)),
        onRes:(counter)=>dispatch(actionCreators.resAction(counter)),
        onLoad:()=>dispatch(actionCreators.loadAction()),
        onSlide:(value,counter)=>dispatch(actionCreators.slideAction(value,counter))
    }}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);