
import './App.css';
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Header from "../Header/Header";
import CardContainer from "../CardContainer/CardContainer";
import DrinkRecipe from '../DrinkRecipe/DrinkRecipe';
import Favorites from "../Favorites/Favorites";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main>
      <Route path='/' exact>
        <Header />
        <CardContainer />
      </Route>
      <Route path='/drinks/:drink_id'>
        <Header />
        <DrinkRecipe recipe={this.props.recipe}/>
      </Route>
      <Route path='/favorites'>
        <Header />
        <Favorites />
      </Route>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe
  }
};

export default connect(mapStateToProps)(App);
