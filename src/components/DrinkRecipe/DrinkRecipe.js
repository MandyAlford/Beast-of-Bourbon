import React from "react";
import "./DrinkRecipe.css";
import { connect } from "react-redux";

const DrinkRecipe = (props) => {
  if(props.recipe) {
    return(
      <div className='drink-recipe' id={props.recipe.idDrink}>
        <p>{props.recipe.strDrink}</p>
        <p>{props.recipe.strCategory}</p>
        <p>{props.recipe.strGlass}</p>
        <p>{props.recipe.strInstructions}</p>
        <img className='drink-recipe-image' src={props.recipe.strDrinkThumb} alt={`${props.recipe.strDrink}-image`}/>
        <p>{props.recipe.strDrink}</p>
        <p>{props.recipe.strDrink}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe
  }
};

export default connect(mapStateToProps)(DrinkRecipe);
