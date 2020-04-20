import React, { Component } from "react";
import "./DrinkRecipe.css";
import { connect } from "react-redux";
import RecipeConverter from '../../util/RecipeConverter';
import rootReducer from '../../reducers'
import { addDrinkToFavorites } from '../../Actions';

class DrinkRecipe extends Component {
  constructor() {
    super();
  }

  addFavorite = () => {
    let favorite = this.props.recipe;
    this.props.favorites(favorite)
  }

  render() {
    if(Object.keys(this.props.recipe).length > 0) {
      let recipeConverter = new RecipeConverter(this.props.recipe)
      let recipeIngredients = recipeConverter.orangizeIngredients()

      let ingredientElements = recipeIngredients.map(ingredient => {
        return <li>{ingredient}</li>
      })
      return(
        <div className='drink-recipe' id={this.props.recipe.idDrink}>
          <div className='recipe-details'>
            <h2>{this.props.recipe.strDrink}</h2>
            <p>Type: {this.props.recipe.strCategory}</p>
            <p>Glassware: {this.props.recipe.strGlass}</p>
            <p>Ingredients:</p>
            <ul> { ingredientElements } </ul>
            <p>{this.props.recipe.strInstructions}</p>
            <button className='add-favorite-button' id={this.props.recipe.idDrink} onClick={this.addFavorite}>Add Favorite</button>
          </div>
          <div>
            <img className='drink-recipe-image' src={this.props.recipe.strDrinkThumb} alt={`${this.props.recipe.strDrink}-image`}/>
          </div>
        </div>
      )
    } else {
      return ''
    }
  }
}


const mapDispatchToProps = dispatch => ({
  favorites: data => dispatch( addDrinkToFavorites(data) )
})

export default connect(null, mapDispatchToProps)(DrinkRecipe);
