import React  from "react";
import   "./Modaal.css";
import Aux from "../Auxiliary";
import Backdrop from "../Backdrop/Backdrop";


const modal=(props)=>{
       
          return(
               <Aux>
       <Backdrop shown={props.show} clicked={props.cancel}/>
               <div className="Modal" 
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