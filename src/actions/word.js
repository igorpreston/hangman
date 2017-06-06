import * as types from '../actionTypes/word';

export const fetchWord = () => dispatch => {
  // if api fails to respond, use placeholder word for the game
  const placeholderWord = 'hangman';

  dispatch(fetchWordRequest());
  fetch(
    `http://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=10&minDictionaryCount=1&maxDictionaryCount=11&minLength=5&maxLength=11&api_key=${process.env.WORDNIK_API_KEY}`
  )
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    dispatch(fetchWordFailure(placeholderWord));
  })
  .then(data => dispatch(fetchWordSuccess(data.word)))
  .catch(error => {
    dispatch(fetchWordFailure(placeholderWord));
  });
};

export const fetchWordRequest = () => ({
  type: types.FETCH_WORD_REQUEST,
});

export const fetchWordSuccess = word => ({
  type: types.FETCH_WORD_SUCCESS,
  payload: { word },
});

export const fetchWordFailure = word => ({
  type: types.FETCH_WORD_FAILURE,
  payload: { word }
});