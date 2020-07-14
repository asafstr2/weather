import { ADD_FAVORITE,REMOVE_FAVORITE } from "../actionTypes";
import { addError } from "./error";


export const addFavorite = (favorite) => ({ type: ADD_FAVORITE, favorite });

export const removeFavorite = (key) => ({ type: REMOVE_FAVORITE, key });




export function addFavoriteToLocal(favorite) {
  return async (dispatch) => {
    try {
      let fromLocal = await JSON.parse(localStorage.getItem("fav")).concat(
        favorite
      );
      await localStorage.setItem("fav", JSON.stringify(fromLocal));
      return dispatch(addFavorite(fromLocal));
    } catch (err) {
      dispatch(addError(err.messege));
    }
  };
}
