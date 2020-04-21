import React, { Component } from "react";
import "./DrinkRecipe.css";
import { connect } from "react-redux";
import RecipeConverter from '../../util/RecipeConverter';
import rootReducer from '../../reducers'
import { toggleFavoriteRecipe } from '../../Actions';

class DrinkRecipe extends Component {
  constructor() {
    console.log('in DrinkRecipe')
    super();
  }

  toggleFavorite = () => {
    let favorite = this.props.recipe;
    this.props.toggleFavorite(favorite)
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
            <button className='favorite-button' id={this.props.recipe.idDrink} onClick={this.toggleFavorite}>Favorite</button>
          </div>
          <div className='image-wrapper'>
            <img className='drink-recipe-image' src={this.props.recipe.strDrinkThumb} alt={`${this.props.recipe.strDrink}-image`}/>
          </div>
        </div>
      )
    } else {
      return <h2 className='error-message'>Ooops...something went wrong!</h2>
    }
  }
}

const mapDispatchToProps = dispatch => ({
  toggleFavorite: data => dispatch( toggleFavoriteRecipe(data) )
})

export default connect(null, mapDispatchToProps)(DrinkRecipe);
