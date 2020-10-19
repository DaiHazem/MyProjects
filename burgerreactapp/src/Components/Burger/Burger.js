import React from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import styleburger from "./Burger.css";


const burger = (props)=>{
     //console.log(props.ingred);
   let selectedIngredients= Object.keys(props.ingred).map(el=>{
        return [...Array(props.ingred[el])].map((_,i)=>{
    return <BurgerIngredients key={el+i} type={el}/>
});

});
const selectedCheck=selectedIngredients.reduce((accum,current)=>{ 
     return accum.concat(current)},[]);
if(selectedCheck.length===0){
     selectedIngredients= <p> Please add Ingredients </p>;
}


return ( <div className={styleburger.burger}>

            <BurgerIngredients type="bread-top"></BurgerIngredients>
            {selectedIngredients}
            <BurgerIngredients type="bread-bottom"></BurgerIngredients>
</div>


)

};



export default burger;