import React, { Component } from "react";
import "./CardContainer.css";
import bartender from "../../assets/bartender.jpg";
import DrinkCard from "../DrinkCard/DrinkCard";
import { getDrinks } from '../../Actions';
import { connect } from 'react-redux';
import { fetchDrinks } from '../../ApiCalls/ApiCalls'

class CardContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    fetchDrinks().then((data) => {
      this.props.setDrinks(data.drinks)
    })
  }

  render() {
    const drinkCards = this.props.drinks.map(drink => <DrinkCard name={drink.strDrink}
    image={drink.strDrinkThumb}
    id={drink.idDrink}
      />)
    return(
      <div className='card-container'>
        {drinkCards}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setDrinks: data => dispatch( getDrinks(data) )
})

const mapStateToProps = state => ({
  drinks: state.drinks
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
