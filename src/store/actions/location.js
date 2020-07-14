import { ADD_LOCATION } from "../actionTypes";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_HOST = "http://dataservice.accuweather.com/";
const API_VERSION = "v1";

export const addLocation = (location) => ({ type: ADD_LOCATION, location });

export const LocationApiUrlAuto = (query) =>
  `${API_HOST}locations/${API_VERSION}/cities/autocomplete?apikey=${API_KEY}&q=${query}`;

export const LocationApiUrlGeo = (lat, lon) =>
  `${API_HOST}locations/${API_VERSION}/cities/geoposition/search?apikey=${API_KEY}&q=${lat}%2C${lon}`;
