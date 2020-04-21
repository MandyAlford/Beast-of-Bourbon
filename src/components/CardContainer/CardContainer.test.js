import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor } from "@testing-library/react";
import { fetchDrinks } from '../../ApiCalls/ApiCalls';
import CardContainer from './CardContainer';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
jest.mock('../../ApiCalls/ApiCalls');
import { createStore } from 'redux';
import rootReducer from '../../reducers'

describe('CardContainer', () => {
  it('should be able to render drink cards', async () => {
    const store = createStore(rootReducer);
    fetchDrinks.mockResolvedValueOnce({
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
          },
          {
              "strDrink": "Brandon and Will's Coke Float",
              "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xspxyr1472719185.jpg",
              "idDrink": "16447"
          }
      ]
    })

    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CardContainer />
        </BrowserRouter>
      </Provider>
    )

    await waitFor(() => expect(getByText('Allegheny')).toBeInTheDocument());
  });
});
