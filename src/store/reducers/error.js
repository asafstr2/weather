import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";

//basic generic error handler
export default (state = { messege: null }, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, messege: action.errors };
    case REMOVE_ERROR:
      return { ...state, messege: null };
    default:
      return state;
  }
};
