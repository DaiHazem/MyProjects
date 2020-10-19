import * as actionTypes from "./actionTypes";
export const loadAction=()=>{
    return{
        type:actionTypes.LOAD_DATA,

    }
} 

export const incAction=(data,counter,status)=>{
    let incremented=data+1;
      return dispatch=>{
         dispatch(setData(incremented,counter))
          }

      
  }
  export const decAction=(data,counter,status)=>{
        let decremented=data-1;
        return dispatch=>{
           dispatch(setData(decremented,counter))
       
        }

    
}
export const resAction=(counter)=>{
    let resetValue=0
    return dispatch=>{
       dispatch(setData(resetValue,counter,true))
       
        }

    
}

  export const setData=(data,counter,status)=>{
      return{
        type:actionTypes.SET_DATA,
        data:data,
        counter:counter,
        status:status
      }

  }

  export const slideAction=(value,counter)=>{
      return{
          type:actionTypes.SLIDE_DATA,
          value:value,
          counter:counter
      }
  }
  
  