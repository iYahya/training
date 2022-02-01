import {LOGIN} from '../constants';
const forbiddenWords = ['spam', 'money'];

export function checkEmpty({dispatch}) {
  return function (next) {
    return function (action) {
      // do your stuff
      if (action.type === LOGIN) {
        if (
          action.payload.email.length == 0 ||
          action.payload.password.length == 0
        ) {
          return dispatch({
            type: 'ERROR',
            payload: {message: 'Please Insert Login info'},
          });
        }
        const foundWord = forbiddenWords.filter(word =>
          action.payload.email.includes(word),
        );
        if (foundWord.length) {
          return dispatch({type: 'ERROR', payload: {message: 'bad'}});
        }
      }
      return next(action);
    };
  };
}

export default checkEmpty;
