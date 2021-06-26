import axios from 'axios';

// ACTION TYPES
const TRANSLATED = 'TRANSLATED';

// ACTION CREATORS
export const gotTranslation = (translatedText) => {
  return {
    type: TRANSLATED,
    translated: translatedText,
  };
};

// THUNK CREATORS

export const getTranslation = (translateInfo) => {
  return async (dispatch) => {
    const translatedText = await axios.post('/api/trans', translateInfo);
    console.log(translatedText.data)
    dispatch(gotTranslation(translatedText.data));
  };
};

// REDUCER

const initialState = {
  translated: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TRANSLATED:
      return { ...state, translated: action.translated };
    default:
      return state;
  }
}
