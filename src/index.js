import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
