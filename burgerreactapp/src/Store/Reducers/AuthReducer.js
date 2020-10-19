import * as actionTypes from "../Actions/ActionsTypes";

const initState={
    token:null,
    userId:null,
    error:null,
    loading:false,
    authredirectpath:"/"
}

const authreducer=(state=initState,action)=>{
switch(action.type){
    case(actionTypes.authstart):{
        return{
            ...state,
            loading:true
        }
    }
    case(actionTypes.setauthredirectpath):{
        return{
            ...state,
            authredirectpath:action.redirectpath
        }
    }
    case(actionTypes.authsuccess):{
        return{
            ...state,
            token:action.tokenId,
            userId:action.userId,
            loading:false,
            error:null
        }
    }
    case(actionTypes.authlogout):{
        return{
            ...state,
            token:null,
            userId:null
        }
    }
    case(actionTypes.authfail):{
        return{
            ...state,
            error:action.error,
            loading:false
        }
    }
        default:return state;
    
}

}


export default authreducer;