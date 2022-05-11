import { combineReducers } from 'redux';

// DUCKS
import categoriesDuck from './ducks/categoriesDuck';
import colorDuck from './ducks/colorDuck';
import tokenDuck from './ducks/tokenDuck';

const rootReducer = combineReducers({
   categoriesDuck,
   colorDuck,
   tokenDuck
})

export default rootReducer;