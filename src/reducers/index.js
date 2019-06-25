import { combineReducers } from 'redux';
import * as actionTypes from '../actions/types';

const initialUsersState = {
  currentUser: null,
  isLoading: true,
};

const user_reducer = (state = initialUsersState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        currentUser: action.payload.currentUser,
        isLoading: false,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: user_reducer,
});

export default rootReducer;
