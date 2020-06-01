import { ADD_HOTEL, HOTEL_LIST_LOADED, SEARCH_HOTELS, SEARCH_LOADED, SEARCH_ACTION } from "../constants/action-type";

const initialState = {
  hotels: [],
  remoteHotels: [],
  searchResultHotels: [],
  destination: "MAD",
  modalType: null,
  modalProps: {},
  loading: true
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ACTION:
      return Object.assign({}, state, {
        loading: true
      });

    case HOTEL_LIST_LOADED:
      return Object.assign({}, state, {
        remoteHotels: action.payload,
        loading: false
      });

    case SEARCH_HOTELS:
      return Object.assign({}, state, {
        remoteHotels: state.remoteHotels.concat(action.payload),
        loading: true
      });

    case SEARCH_LOADED:
      
      return Object.assign({}, state, {
        searchResultHotels: action.payload,
        loading: false
      });
  }

  return state;
}

export default rootReducer;
