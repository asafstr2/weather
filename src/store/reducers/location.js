import {
  ADD_LOCATION
} from "../actionTypes";


export default (state = {}, action) => {
  switch (action.type) {
    case ADD_LOCATION:
      return action.location
    default:
      return state;
  }
};



