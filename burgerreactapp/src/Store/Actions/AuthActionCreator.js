import *  as actionTypes from "./ActionsTypes";
import axios from "axios";

export const authStartAction=()=>{
    return {
        type:actionTypes.authstart
    }
}

export const authSuccessAction=(tokenId,userId)=>{
    return{
        type:actionTypes.authsuccess,
        tokenId:tokenId,
        userId:userId
        
    }
}

export const authFailAction=(error)=>{
 return{
     type:actionTypes.authfail,
     error:error
 }
}
export const logOutAction=()=>{
    localStorage.removeItem("userid");
    localStorage.removeItem("expirationdate");
    localStorage.removeItem("token");

    return{
        type:actionTypes.authlogout
    }
}
export const authCheckTimeoutAction=(expirationtime)=>{
    return dispatch=>{
    setTimeout(
        ()=>{
            dispatch(logOutAction());

        },
    expirationtime*1000)
};
};
export const authRedirectPathAction=(path)=>{
    return {
        type:actionTypes.setauthredirectpath,
        redirectpath:path

    }
}

export const authProcessAction=(email,password,signin)=>{
    return dispatch=>{
        dispatch(authStartAction());
        const authdatasent={
            email:email,
            password:password,
            returnSecureToken:true
        }
        let url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCJZO-Xadhh_Sr3QNM-FFmmnzstzez_ldg";

        if(!signin){
        
        url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCJZO-Xadhh_Sr3QNM-FFmmnzstzez_ldg";
        }
        axios.post(url,authdatasent).then(response=>{
           // console.log(response);
            const expiration=new Date(new Date().getTime()+response.data.expiresIn*1000);
            localStorage.setItem("userid",response.data.localId);
            localStorage.setItem("token",response.data.idToken);
            localStorage.setItem("expirationdate",expiration)
            dispatch(authSuccessAction(response.data.idToken,response.data.localId));
            dispatch(authCheckTimeoutAction(response.data.expiresIn));
        }).catch(err=>{
           // console.log(err);
            dispatch(authFailAction(err.response.data.error));
        })

    }
}

export const  authLoginAdjustmentAction=()=>{
    return dispatch=>{
        const token=localStorage.getItem("token");
        if(!token){
            dispatch(logOutAction());
        }else{
            const expirationtiming=new Date (localStorage.getItem("expirationdate"));

            if(expirationtiming<= new Date()){
                dispatch(logOutAction());
            }
        else{
            const userid=localStorage.getItem("userid")

            dispatch(authSuccessAction(token,userid));
            dispatch(authCheckTimeoutAction((expirationtiming.getTime()-new Date().getTime())/1000));

        }
    }
    }

}