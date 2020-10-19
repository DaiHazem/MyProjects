import React  from "react";
import styleModal from "./Modaal.css";
import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";


const modal=(props)=>{
   // shouldComponentUpdate(nextProps,nextState){
     //    return nextProps.show !== this.props.show ||
       //  nextProps.children!==this.props.children; 
         
    //}

    //componentDidUpdate(){
         //console.log("Modal is updated");
    //}

     
          return(
               <Aux>
       <Backdrop shown={props.show} clicked={props.cancel}/>
               <div className={styleModal.Modal} 
          style={{transform:props.show ? "translateY(0)": "translateY(-200vh)",
          opacity: props.show ? "1": "0"}}>
          {props.children}
          </div>
     
          </Aux>

          );
     };

 // shouldComponentUpdate(nextProps,nextState){
     //    return nextProps.show !== this.props.show ||
       //  nextProps.children!==this.props.children;


export default React.memo(modal, (prevProps,nextProps)=>{
return nextProps.show === prevProps.show &&
nextProps.children === prevProps.children
});