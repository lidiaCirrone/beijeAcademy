//Actions
const SET_CATEGORY = 'web/category/SET_CATEGORY';
const INIT_CATEGORY = 'web/category/INIT_CATEGORY';

// Action Creators
export function setCategory(value) {
   return {
      type: SET_CATEGORY,
      payload: {
         category: value
      }
   }
}

// Action Creators
export function initCategory() {
   return {
      type: INIT_CATEGORY,
      payload: {
         category: null
      }
   }
}

const INIT_STATE = {
   category: null
}

// Reducer
export default function categoriesDuck(state = INIT_STATE, action) {
   switch (action.type) {
      case SET_CATEGORY:
         var newState = Object.assign({}, state);
         newState.category = action.payload.category;
         return newState;
      case INIT_CATEGORY:
         var newState = Object.assign({}, state);
         newState.category = null;
         return newState;
      default:
         return state;
   }
}