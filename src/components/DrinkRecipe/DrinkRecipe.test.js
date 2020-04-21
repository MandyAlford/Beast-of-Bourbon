import DrinkRecipe from './DrinkRecipe';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { createStore } from 'redux';
import rootReducer from '../../reducers'

describe('DrinkRecipe', () => {
  it('should render on page', () => {
    const cocktail =  {
        "idDrink": "11021",
        "strDrink": "Allegheny",
        "strCategory": "Ordinary Drink",
        "strGlass": "Cocktail glass",
        "strInstructions": "Shake all ingredients",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uwvyts1483387934.jpg",
        "strIngredient1": "Dry Vermouth",
        "strIngredient2": "Bourbon",
        "strIngredient3": "Blackberry brandy",
        "strIngredient4": "Lemon juice",
        "strIngredient5": "Lemon peel",
        "strMeasure1": "1 oz ",
        "strMeasure2": "1 oz ",
        "strMeasure3": "1 1/2 tsp ",
        "strMeasure4": "1 1/2 tsp ",
        "strMeasure5": "1 twist of ",
        }
    const store = createStore(rootReducer);
    let { getByText, getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
        <DrinkRecipe recipe={cocktail}/>
        </BrowserRouter>
      </Provider>
      )

    expect(getByText('Allegheny')).toBeInTheDocument();
    expect(getByText('Type: Ordinary Drink')).toBeInTheDocument();
    expect(getByText('Glassware: Cocktail glass')).toBeInTheDocument();
    expect(getByText('Shake all ingredients')).toBeInTheDocument();
    expect(getByText('Dry Vermouth: 1 oz')).toBeInTheDocument();
    expect(getByText('Bourbon: 1 oz')).toBeInTheDocument();
    expect(getByText('Blackberry brandy: 1 1/2 tsp')).toBeInTheDocument();
    expect(getByRole('img')).toBeInTheDocument();
  });
});
