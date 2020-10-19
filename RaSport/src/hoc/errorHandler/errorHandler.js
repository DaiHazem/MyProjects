import React from "react";
import Modal from "../../Components/UI/Modaal/Modaal";
import Aux from "../Auxiliary";
import usehttpReqErrorHandler from "../../Hooks/HttpReqErrorHandler";


const errorHandler=(WrappedComponent,axios)=>{
    return props=>{
        const [error,clearError]=usehttpReqErrorHandler(axios);
  
            return (
                <Aux>
                <Modal show={error}
                cancel={clearError}>
                    {error ? error.message :null}
                    </Modal>
                <WrappedComponent {...props}/>
                </Aux>

            )
        

    }
}
    
    
   



export default errorHandler;