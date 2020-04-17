import React, { Component } from "react";
import "./CardContainer.css";
import bartender from "../../assets/bartender.jpg";
import DrinkCard from "../DrinkCard/DrinkCard";
import { getDrinks } from '../../Actions';
import { connect } from 'react-redux';

class CardContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const fetchResults = {
      "drinks": [
        {
          "strDrink": "Allegheny",
          "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uwvyts1483387934.jpg",
          "idDrink": "11021"
        },
        {
          "strDrink": "Bourbon Sour",
          "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg",
          "idDrink": "11147"
        }
      ]
    }

    this.props.setDrinks(fetchResults.drinks)

  }

  render() {
    return(
      <div className='card-container'>
        <DrinkCard />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setDrinks: data => dispatch( getDrinks(data) )
})

export default connect(null, mapDispatchToProps)(CardContainer);
