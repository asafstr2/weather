import { apiCall } from "../../services/api";
import {
  REMOVE_FAVORITE,
  LOAD_FAVORITE,
  EDIT_FAVORITE,
  LOAD_WEATHER,
  LOAD_LOCATION
} from "../actionTypes";
import { addError } from "./error";
const API_KEY = "da5d2SeAz1A8zc7jdG6eqyX7DZeljURw"; //TODO: move to env
const API_HOST = "http://dataservice.accuweather.com/";
const API_VERSION = "v1";

export const loadweather = (weather) => ({ type: LOAD_WEATHER, weather });
export const loadLocation = (location) => ({ type: LOAD_LOCATION, location });


// export const remove = (id) => ({ type: REMOVE_MESSEGES, id });
// export const edit = (id, message) => ({ type: EDIT_MESSEGES, id, message });
 const currentCityCodeForTest="1-215615_1_AL"


export const LocationApiUrl = (query) =>
         `${API_HOST}locations/${API_VERSION}/cities/search?apikey=${API_KEY}&q=${query}`;

export const WeatherApiUrl = (days,currentCityCode) =>
         `${API_HOST}forecasts/${API_VERSION}/daily/${days}day/${currentCityCode}?apikey=${API_KEY}&details=true&metric=true`;
  ;


export function fetchweather(days, currentCity) {
         return (dispatch) => {
           return apiCall("get", WeatherApiUrl(days, currentCity))
             .then((res) => dispatch(loadweather(res)))
             .catch((err) => dispatch(addError(err.messege)));
         };
       }


export function fetchLocation(query) {
  console.log(LocationApiUrl(query));
  return (dispatch) => {
    return apiCall("get", LocationApiUrl(query))
      .then((res) => dispatch(loadLocation(res)))
      .catch((err) => dispatch(addError(err.messege)));
  };
}

// export const postNewMesseges = (text) => (dispatch, getState) => {
//   let { currentUser } = getState();
//   const id = currentUser.user.id;
//   return apiCall("post", `/api/users/${id}/messeges`, text)
//     .then((res) => {
//       console.log(text);
//     })
//     .catch((err) => dispatch(addError(err.messege)));
// };

// export function removeMessege(userId, message_id) {
//   return (dispatch) => {
//     return apiCall("delete", `/api/users/${userId}/messeges/${message_id}`)
//       .then(() => dispatch(remove(message_id)))
//       .catch((err) => dispatch(addError(err.messege)));
//   };
// }

// export const editMesseges = (message_id, text) => (dispatch, getState) => {
//   let { currentUser } = getState();
//   const id = currentUser.user.id;
//   return apiCall("put", `/api/users/${id}/messeges/${message_id}`, { text })
//     .then((res) => {
//       console.log(res);
//       dispatch(edit(message_id, text));
//     })
//     .catch((err) => dispatch(addError(err.messege)));
// };





// http://dataservice.accuweather.com/locations/v1/cities/search?apikey=da5d2SeAz1A8zc7jdG6eqyX7DZeljURwq=eilat
// http://dataservice.accuweather.com/locations/v1/cities/search?apikey=da5d2SeAz1A8zc7jdG6eqyX7DZeljURw&q=eilat

 http://dataservice.accuweather.com/forecasts/v1/daily/5day/1-215615_1_AL?apikey=da5d2SeAz1A8zc7jdG6eqyX7DZeljURw&details=true&metric=true 
