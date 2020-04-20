import React, { Component } from "react";
import './Favorites.css';
import { connect } from 'react-redux';
import { fetchDrinkRecipe } from '../../ApiCalls/ApiCalls';
import { Route, withRouter } from 'react-router-dom';

class Favorites extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <p>I am a favorite</p>
    )
  }
}

export default withRouter(Favorites);
