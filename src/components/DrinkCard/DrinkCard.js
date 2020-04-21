import React, { Component } from 'react';
import './DrinkCard.css';
import { fetchDrinkRecipe } from '../../ApiCalls/ApiCalls';
import { getDrinkRecipe } from '../../Actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class DrinkCard extends Component {
  constructor(){
    super();
  }

getDrinkDetails = (event) => {
  let drinkId = event.target.parentElement.id
  fetchDrinkRecipe(drinkId).then((data) => {
    console.log('data', data)
    this.props.setCurrentRecipe(data.drinks[0])
    this.props.history.push(`/drinks/${drinkId}`)
  })
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

export default connect(null, mapDispatchToProps)(withRouter(DrinkCard));
