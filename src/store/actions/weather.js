import { apiCall } from "../../services/api";
import { LOAD_WEATHER } from "../actionTypes";
import { addError } from "./error";
const API_KEY = process.env.REACT_APP_API_KEY;
const API_HOST = "http://dataservice.accuweather.com/";
const API_VERSION = "v1";

export const loadweather = (weather) => ({ type: LOAD_WEATHER, weather });

export const WeatherApiUrl = (days, currentCityCode) =>
  `${API_HOST}forecasts/${API_VERSION}/daily/${days}day/${currentCityCode}?apikey=${API_KEY}&details=true&metric=true`;
export function fetchweather(days, currentCity) {
  return (dispatch) => {
    return apiCall("get", WeatherApiUrl(days, currentCity))
      .then((res) => dispatch(loadweather(res.DailyForecasts)))
      .catch((err) => dispatch(addError(err.messege)));
  };
}
