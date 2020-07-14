import { LOAD_WEATHER } from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_WEATHER:
      return [...action.weather];

    default:
      return state;
  }
};
