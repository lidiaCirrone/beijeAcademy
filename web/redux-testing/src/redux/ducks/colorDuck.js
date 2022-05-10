// Actions
const SET_COLOR = 'web/color/SET_COLOR';
const INIT_COLOR = 'web/color/INIT_COLOR';

// Action Creators
export function setColor(colorValue) {
   return {
      type: SET_COLOR,
      payload: {
         color: colorValue
      }
   };
}

// Action Creators
export function initColor() {
   return {
      type: INIT_COLOR,
      payload: {
         color: 'black'
      }
   };
}

const INIT_STATE = {
   token: {
      color: 'black'
   }
}

// Reducer
export default function colorDuck(state = INIT_STATE, action) {
   switch (action.type) {
      case SET_COLOR:
         var newState = Object.assign({}, state);
         newState.color = action.payload.color
         return newState;
      case INIT_COLOR:
         var newState = Object.assign({}, state);
         newState.color = 'black';
         return newState;
      default:
         return state;
   }
}