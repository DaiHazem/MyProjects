import *  as actionTypes from "./ActionsTypes";
import axios from "../../axios/axiosinstance";

 export const addIngredientAction=(ingelname)=>{
     return {
         type:actionTypes.addingredient,
         updatedingredient:ingelname
     };

}

export const removeIngredientAction=(ingelname)=>{
    return {
        type:actionTypes.removeingredient,
        updatedingredient:ingelname
    };

}

export const getIngredientsAction=(ingredients)=>{
    return {
        type:actionTypes.getingredients,
        burgeringredients:ingredients
    }
}
export const ingredientsFailureAction=()=>{
    return{
        type:actionTypes.ingredientsfailure 

    }
}
export const initializeIngredientsAction=()=>{
    return (dispatch)=>{
        axios.get("https://my-react-burger-290e3.firebaseio.com/ingredients.json").then((response)=>{
        dispatch(getIngredientsAction(response.data));
        }).catch(error=>{ 
            dispatch(ingredientsFailureAction());})
};
}



