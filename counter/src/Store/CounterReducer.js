import *  as actionTypes from "./actionTypes";

const initState={
 counterData:0,
 extraCounterData:0,
 updates:0

   
}

const counterreducer=(state=initState,action)=>{
    switch(action.type){
        case actionTypes.LOAD_DATA:
            return{
         ...state

            };         
            
            case actionTypes.SET_DATA:
                if(state.updates>9 &&action.status){
                    let diff=action.data-state.counterData;
                    let updatedValue=state.extraCounterData-diff
                    return{
                        ...state,
                        updates:0,
                        extraCounterData:action.counter?state.extraCounterData:updatedValue,
                        counterData:action.counter?state.counterData: action.data,

                    }

                } else if(!action.status){
                    return{
                        ...state,
                        counterData:action.counter?state.counterData: action.data,
                    extraCounterData:action.counter?action.data:state.extraCounterData


                    }

                }
                else{
                return{
                    ...state,
                    updates:state.updates+1,
                    counterData:action.counter?state.counterData: action.data,
                    extraCounterData:action.counter?action.data:state.extraCounterData
                }}
                case actionTypes.SLIDE_DATA:
                    if(state.updates>9){
                        let diff=action.value-state.counterData;
                        let updatedValue=state.extraCounterData-diff
                        return{
                            ...state,
                            updates:0,
                            extraCounterData:action.counter?state.extraCounterData:updatedValue,
                            counterData:action.counter?state.counterData: action.value,
                        }
                        }else{
                return{
                    ...state,
                    updates:state.updates+1,
                    counterData:action.counter?state.counterData: action.value,
                    extraCounterData:action.counter?action.value:state.extraCounterData
                }}




            default:return state;
    }

}
export default counterreducer;