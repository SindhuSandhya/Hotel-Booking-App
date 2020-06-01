import { ADD_HOTEL, SEARCH_HOTELS, SEARCH_LOADED, HOTEL_LIST_LOADED, SEARCH_ACTION } from "../constants/action-type";
import axios from 'axios';
export function searcedAction(payload) {
  return { type: SEARCH_ACTION, payload };
}

export function getData() {
  return function (dispatch) {
    return fetch("http://localhost:3000/greeting/hello")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({ type: HOTEL_LIST_LOADED, payload: json });
      });
  };
}


export function getSearchData(dest) {
  return function (dispatch) {
    return fetch('http://localhost:3000/destination/hello?dest=' + dest.replace(/['"]+/g, ""))
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({ type: SEARCH_LOADED, payload: json });
      });
  };
}


// export const getSearchData =(dest) => async dispatch => {
//   const res= await axios.get('http://localhost:3000/destination/hello?dest=' + dest.replace(/['"]+/g, ""));
//   dispatch({type: SEARCH_LOADED, payload : res });
// }

// export function getSearchData(dest) {
//   if (dest !== undefined) {
//     const destination = dest.replace(/['"]+/g, "");
//     return function (dispatch) {
//       return fetch("http://localhost:3000//hello")
//         .then((response) => response.json())
//         .then((json) => {
//           console.log(json);
//           dispatch({ type: SEARCH_LOADED, payload: json });
//         });
//     };
//   }
// }

export function searchHotel(payload) {
  return { type: SEARCH_LOADED, payload };
}
