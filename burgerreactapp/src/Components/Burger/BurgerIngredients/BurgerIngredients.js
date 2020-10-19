import React from "react";
import styleIngred from "./BurgerIngredients.css";
import PropTypes from "prop-types";

const burgerIngredient =(props)=>{
    let ingredient=null;

    switch(props.type){
            case ("bread-bottom"): ingredient=<div className={styleIngred.BreadBottom}></div>;
            break;
            case("bread-top"): ingredient=(
                <div className={styleIngred.BreadTop}>
                    <div className={styleIngred.Seeds1}></div>
                    <div className={styleIngred.Seeds2}></div>
                </div>
            );
            break;
            case("meat"): ingredient= <div className={styleIngred.Meat}></div>;
            break;
            case("cheese"): ingredient= <div className={styleIngred.Cheese}></div>;
            break;
            case("salad"): ingredient= <div className={styleIngred.Salad}></div>;
            break;
            case("bacon"): ingredient= <div className={styleIngred.Bacon}></div>;
            break;
 
            default: ingredient=null;
            break;
    }
    burgerIngredient.propTypes={
     type: PropTypes.string.isRequired
    };
      return ingredient;
    
      
};


export default burgerIngredient;