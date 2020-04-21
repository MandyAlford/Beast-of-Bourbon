import React from 'react';
import { render, fireEvent, waitFor } from "@testing-library/react";
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import { BrowserRouter } from "react-router-dom";
import { fetchDrinks, fetchDrinkRecipe } from '../../ApiCalls/ApiCalls';
jest.mock('../../ApiCalls/ApiCalls');

describe('App', () => {
  it('should render drink cards on the page', async() => {
    const store = createStore(rootReducer);

    fetchDrinks.mockResolvedValue({
      drinks: [
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
    })
    fetchDrinkRecipe.mockResolvedValue({
      drinks: [
        {
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
      ]
    })

    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
    await waitFor(() => expect(getByText('Allegheny')).toBeInTheDocument());
    await waitFor(() => expect(getByText('Bourbon Sour')).toBeInTheDocument());

    // console.log(getByText('Allegheny'))
    fireEvent.click(getByText('Allegheny'))
    await waitFor(() => expect(getByText('Glassware: Cocktail glass')).toBeInTheDocument());
    expect(getByText('Favorite')).toBeInTheDocument();

    fireEvent.click(getByText('Favorite'))
    expect(getByText('View Favorites')).toBeInTheDocument();
    fireEvent.click(getByText('View Favorites'))
     // favorite a drinks
     // see that it is listed in favorites page
  })
})
