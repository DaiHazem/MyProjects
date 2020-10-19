import * as actionTypes from "../Actions/ActionsTypes";

const initialState={
    orders:[],
    loading:false,
    purchased:false
}
const orderreducer=(state=initialState,action)=>{
 switch(action.type){
     case(actionTypes.orderpurchased):{
         const orderel={
             ...action.orderInfo,
              id: action.id
         }
         return{
             ...state,
             loading:false,
             orders:state.orders.concat(orderel),
             purchased:true
         }}
      case(actionTypes.purchasestart):{
          return{
              ...state,
              loading:true
          }
      }

     
     case(actionTypes.orderfailed):{
        return{   
        ...state,
        loading:false,

        }
     }
     case(actionTypes.orderend):{
         return{
             ...state,
             purchased:false
         }
     }
     case(actionTypes.fetchorderssuccess):{
         return{
             ...state,
             orders:action.orders,
             loading:false
         }
     }
     case(actionTypes.fetchordersstart):{
         return{
             ...state,
             loading:true
         }
     }
     case(actionTypes.fetchordersfailure):{
         return{
             ...state,
             loading:false     
         }
     }
default: return state;
    }
}

export default orderreducer;