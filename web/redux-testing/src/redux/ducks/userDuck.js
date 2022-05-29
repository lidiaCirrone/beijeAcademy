// actions
const SET_USER = 'web/user/SET_USER';
const INIT_USER = 'web/user/INIT_USER';

// action creators
export function setUser(value) {
   return {
      type: SET_USER,
      payload: {
         user: value
      }
   }
}

// action creators
export function initUser() {
   return {
      type: INIT_USER,
      payload: {
         user: ''
      }
   }
}

const INIT_STATE = '';

// reducer
export default function userDuck(state = INIT_STATE, action) {
   switch (action.type) {
      case SET_USER:
         var newState = Object.assign({}, state);
         newState.user = action.payload.user;
         return newState;
      case INIT_USER:
         var newState = Object.assign({}, state);
         newState.user = INIT_STATE;
         return newState;
      default:
         return state;
   }
}
