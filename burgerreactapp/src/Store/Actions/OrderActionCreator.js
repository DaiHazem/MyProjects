import * as actionTypes from "./ActionsTypes";
import axios from "../../axios/axiosinstance";
export const orderPurchsedAction=(orderform,id)=>{
    return{
        type:actionTypes.orderpurchased,
        orderInfo:orderform,
        id:id
    }

}

export const orderFailedAction=(error)=>{
    return{
    type:actionTypes.orderfailed,
    error:error
    }
}
export const orderPurchaseStartAction=()=>{
    return{
        type:actionTypes.purchasestart
    }
}

export const orderFormSentAction=(order,token)=>{
    return dispatch=>{
        dispatch(orderPurchaseStartAction());
    axios.post("/order.json?auth="+token,order).then(response=>{
     //console.log(response.data);
     dispatch(orderPurchsedAction(order,response.data.name));
    }).catch(error=>{
        dispatch(orderFailedAction(error));

    })
}
}

export const orderEndAction=()=>{

    return{
        type:actionTypes.orderend
    }
}

export const fetchOrdersSuccessAction=(fetchedorders)=>{
    return{
        type:actionTypes.fetchorderssuccess,
        orders:fetchedorders,
        
    }
}

export const fetchOrdersFailureAction=(error)=>{
    return{
        type:actionTypes.fetchordersfailure,
        error:error,  
    }
}

export const fetchOrdersStartAction=()=>{
    return{
        type:actionTypes.fetchordersstart
    }
}
export const fetchOrdersAction=(token,userId)=>{

    return (dispatch)=>{
        dispatch(fetchOrdersStartAction());
       // const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';

        const queryParams= '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get("/order.json"+ queryParams).then(res=>{
           // console.log(res.data);
            let fetchedorders=[];
            for(let key in res.data){
                fetchedorders.push({
                    ...res.data[key],
                    id:key
                });
            }
           // console.log(fetchedorders);
              dispatch(fetchOrdersSuccessAction(fetchedorders));
        }).catch(error=>{
            dispatch(fetchOrdersFailureAction(error));
        })
    }

    }
