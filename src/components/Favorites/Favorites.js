import React, { Component } from "react";
import './Favorites.css';
import { connect } from 'react-redux';
import { fetchDrinkRecipe } from '../../ApiCalls/ApiCalls';
import { Route, withRouter } from 'react-router-dom';
import DrinkRecipe from '../DrinkRecipe/DrinkRecipe';

class Favorites extends Component {
  constructor() {
    super();
  }

  render() {
    return this.props.favorites.map((favorite, index )=> {
      return <DrinkRecipe
      recipe={favorite}
      key={index}/>
    })
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
})

export default connect(mapStateToProps)(withRouter(Favorites));
