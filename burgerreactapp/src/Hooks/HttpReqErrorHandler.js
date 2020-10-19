import {useState, useEffect} from "react";

export default httpClient=>{
    const [stateError,setStateError]=useState(null);
       
        const quitHandler=()=>{
            setStateError(null);
        }
        
         const reqinterceptor= httpClient.interceptors.request.use(request=>{
           setStateError(null);
            return request;
            })

           const resinterceptor= httpClient.interceptors.response.use(response=>response,
                error=>{
                    setStateError(error);
                })
        
        useEffect(()=>{ 
            return ()=>{
            httpClient.interceptors.request.eject(reqinterceptor);
            httpClient.interceptors.response.eject(resinterceptor);
            }
        },[ reqinterceptor,resinterceptor])
        

        return [stateError,quitHandler];
}