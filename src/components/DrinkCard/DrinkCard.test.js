import DrinkCard from './DrinkCard';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { createStore } from 'redux';
import rootReducer from '../../reducers'

describe('DrinkCard', () => {
  it('should have a header', () => {
    const store = createStore(rootReducer);
    let { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
        <DrinkCard name={'Manhattan'}/>
        </BrowserRouter>
      </Provider>
      )

    expect(getByText('Manhattan')).toBeInTheDocument();
  });

  it('should have an image', () => {
    const store = createStore(rootReducer);
    let { getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <DrinkCard
          name={'Manhattan'}
          image={'http://picture.jpg'}
          />
        </BrowserRouter>
      </Provider>
      )

      expect(getByRole('img')).toBeInTheDocument()
  });
});
