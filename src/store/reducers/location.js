import {
  REMOVE_FAVORITE,
  LOAD_FAVORITE,
  EDIT_FAVORITE,
  LOAD_WEATHER,
  LOAD_LOCATION,
} from "../actionTypes";


export default (state = [], action) => {
  console.log(state);
  switch (action.type) {
    case LOAD_LOCATION:
      return [...action.location];
    case REMOVE_FAVORITE:
      return [...state.filter((state) => state._id !== action.id)];
    // case LOAD_FAVORITE:
    //   return [[...state, { messages: action.message }]];
    // case EDIT_MESSEGES:
    //   return [
    //     ...state.map((stateMessege) =>
    //       stateMessege._id === action.id
    //         ? { ...stateMessege, text: action.message }
    //         : stateMessege
    //     ),
    //   ];

    default:
      return state;
  }
};
