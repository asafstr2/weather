import axios from "axios";

/**
 * A warapper around axios API call that formats error
 * @param {string} method the HTTP verb you want to use like get post etc...
 * @param {string*} path the roue path/endpoint
 * @param {*object} data (optional) data in JSON format for POST requests
 */


export function apiCall(method, path, data) {
  
  return new Promise((resolve, reject) => {
    return axios[method](path, data)
      .then((res) => {
        console.log(res.data)
        return resolve(res.data);
      })
      .catch((err) => {
        return reject(err.response.data.error);
      });
  });
}



// export function setTokenHeader(token) {
//   if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   else delete axios.defaults.headers.common["Authorization"];
// }

// fetch(
//   "https://apiconsole-prod.apigee.net/smartdocs/v1/sendrequest?targeturl=http%3A%2F%2Fdataservice.accuweather.com%2Flocations%2Fv1%2Fcities%2Fautocomplete%3Fapikey%3DhnATJSBUdxRxGRgGte1FszJ6K7X9pJO3%26q%3Disrael&_=1594654635925",
//   {
//     headers: {
//       accept: "*/*",
//       "accept-language": "en-US,en;q=0.9,he-IL;q=0.8,he;q=0.7",
//       "sec-fetch-dest": "empty",
//       "sec-fetch-mode": "cors",
//       "sec-fetch-site": "cross-site",
//     },
//     referrer:
//       "https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/autocomplete",
//     referrerPolicy: "no-referrer-when-downgrade",
//     body: null,
//     method: "GET",
//     mode: "cors",
//     credentials: "omit",
//   }
// );