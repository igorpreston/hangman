import * as types from '../actionTypes/word';

export const fetchWord = () => dispatch => {
  dispatch(fetchWordRequest());
  fetch(
    'http://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=10&minDictionaryCount=1&maxDictionaryCount=11&minLength=5&maxLength=11&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
  )
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    dispatch(fetchWordFailure());
  })
  .then(data => dispatch(fetchWordSuccess(data.word)))
  .catch(error => {
    console.log(error);
    dispatch(fetchWordFailure());
  });
};

export const fetchWordRequest = () => ({
  type: types.FETCH_WORD_REQUEST,
});

export const fetchWordSuccess = word => ({
  type: types.FETCH_WORD_SUCCESS,
  payload: { word },
});

export const fetchWordFailure = () => ({
  type: types.FETCH_WORD_FAILURE,
});