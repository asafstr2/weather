import { ADD_FAVORITE } from "../actionTypes";
import { addError } from "./error";
export const addFavorite = (favorite) => ({ type: ADD_FAVORITE, favorite });

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
