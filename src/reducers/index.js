import { combineReducers } from 'redux';
import { drinks } from './drinks';
import { recipe } from './recipe';
import { favorites } from './favorites';

const rootReducer = combineReducers({
  drinks,
  recipe,
  favorites
})

export default rootReducer;
