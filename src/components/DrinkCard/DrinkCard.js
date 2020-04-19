import React, { Component } from "react";
import "./DrinkCard.css";
import { fetchDrinkRecipe } from '../../ApiCalls/ApiCalls';
import { getDrinkRecipe } from '../../Actions';
import { connect } from 'react-redux';

class DrinkCard extends Component {
  constructor(){
    super();
  }

getDrinkDetails = (event) => {
  let drinkId = event.target.parentElement.id
  fetchDrinkRecipe(drinkId).then((data) => {
    this.props.setCurrentRecipe(data.drinks[0])
  })
  // take the id from parent element,
  // interpolate the id into fetch request and fetch data
  // set recipe in store
  // go to new route path
  // display drink recipe pn page

}

render() {
  return (
    <div className='drink-card' id={this.props.id} onClick={this.getDrinkDetails}>
      <h1 className='drink-card-header'>{this.props.name}</h1>
      <img className='drink-card-image' src={this.props.image} alt={`${this.props.name}-image`}
      />
    </div>
  )
}
}

const mapDispatchToProps = dispatch => ({
  setCurrentRecipe: data => dispatch( getDrinkRecipe(data) )
})

export default connect(null, mapDispatchToProps)(DrinkCard);
