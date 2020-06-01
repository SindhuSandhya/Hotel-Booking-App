import { ADD_HOTEL } from "../constants/action-type";

const forbiddenWords = ["one star", "two star", 'money', 'no breakfast'];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === ADD_HOTEL) {
        
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );

        if (foundWord.length) {
          return dispatch({ type: "Hotel type not allowed" });
        }
      }
      return next(action);
    };
  };
}