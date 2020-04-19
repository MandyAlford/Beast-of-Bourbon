import React from "react";
import "./DrinkRecipe.css";
import { connect } from "react-redux";
import RecipeConverter from '../../util/RecipeConverter';

const DrinkRecipe = (props) => {
  if(Object.keys(props.recipe).length > 0) {
    let recipeConverter = new RecipeConverter(props.recipe)
    let recipeIngredients = recipeConverter.orangizeIngredients()

    let ingredientElements = recipeIngredients.map(ingredient => {
      return <li>{ingredient}</li>
    })
    return(
      <div className='drink-recipe' id={props.recipe.idDrink}>
        <h2>{props.recipe.strDrink}</h2>
        <p>Type: {props.recipe.strCategory}</p>
        <p>Glassware: {props.recipe.strGlass}</p>
        <p>Ingredients:</p>
        <ul> { ingredientElements } </ul>
        <p>{props.recipe.strInstructions}</p>
        <img className='drink-recipe-image' src={props.recipe.strDrinkThumb} alt={`${props.recipe.strDrink}-image`}/>
        <button className='add-favorite-button'>Add Favorite</button>
      </div>
    )
  } else {
    return ''
  }
}

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe
  }
};

export default connect(mapStateToProps)(DrinkRecipe);
