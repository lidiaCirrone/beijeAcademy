import {combineReducers} from 'redux';

// DUCKS
import tokenDuck from './ducks/tokenDuck';
import colorDuck from './ducks/colorDuck';

const rootReducer = combineReducers({
   tokenDuck,
   colorDuck
})

export default rootReducer;