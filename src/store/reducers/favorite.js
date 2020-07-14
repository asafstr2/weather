import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actionTypes";

export default (
  state = JSON.parse(localStorage.getItem("fav")) || [],
  action
) => {
  switch (action.type) {
    case ADD_FAVORITE:
      //just making sure no duplicate
      let stateSanitize = [
        ...new Set([...state, action.favorite].map(JSON.stringify)),
      ].map(JSON.parse);
      //save to local storage
      localStorage.setItem("fav", JSON.stringify(stateSanitize));
      return stateSanitize;
    case REMOVE_FAVORITE:
      let neState = [
        ...state.filter((stateFavorite) => stateFavorite.key !== action.key),
      ];
      localStorage.setItem("fav", JSON.stringify(neState));

      return neState

    default:
      return state;
  }
};
