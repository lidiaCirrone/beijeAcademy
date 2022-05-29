import {combineReducers} from 'redux';

import userDuck from './ducks/userDuck';

const rootReducer = combineReducers({
   userDuck
})

export default rootReducer;