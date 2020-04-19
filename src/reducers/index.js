import { combineReducers } from 'redux';
import { drinks } from './drinks';
import { recipe } from './recipe';

const rootReducer = combineReducers({
  drinks,
  recipe
})

export default rootReducer;
