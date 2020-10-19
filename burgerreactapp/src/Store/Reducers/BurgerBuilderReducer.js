import * as actionTypes from "../Actions/ActionsTypes";

const initialstate={
    ingredients: null,
    totalPrice: 5,
    error:false,
    building:false
}
const ingredientPrices={
    salad:5.40,
    cheese:10.5,
    bacon:20,
    meat:50
}
const burgerbuilderreducer=(state=initialstate,action)=>{
    switch(action.type){
        case(actionTypes.addingredient):
            return{
                ...state,
                ingredients:{...state.ingredients,
                [action.updatedingredient]:state.ingredients[action.updatedingredient] +1
                },
                totalPrice:state.totalPrice + ingredientPrices[action.updatedingredient],
                building:true
            
            };
        
        case(actionTypes.removeingredient):
        return {
        ...state,
        ingredients:{...state.ingredients,
        [action.updatedingredient]:state.ingredients[action.updatedingredient] -1
        },
        totalPrice:state.totalPrice - ingredientPrices[action.updatedingredient],
        building:true

    };
    case(actionTypes.getingredients):
    return{
        ...state,
        ingredients:action.burgeringredients,
        error:action.error,
        totalPrice:5,
        building:false
    }
    case(actionTypes.ingredientsfailure):
    return{
        ...state,
        error:true
    }
    default:    return state;

    }

}

export default burgerbuilderreducer;