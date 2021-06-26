import axios from 'axios';

// ACTION TYPES
const TRANSLATE = 'TRANSLATE';

// ACTION CREATORS
export const gotTranslation = (translatedText) => {
  return {
    type: TRANSLATE,
    translate: translatedText,
  };
};

// THUNK CREATORS

export const getTranslation = (translateInfo) => {
  return async (dispatch) => {
    const translatedText = await axios.post('/api/trans', translateInfo);
    dispatch(gotTranslation(translatedText.data));
  };
};

// REDUCER

const initialState = {
  translate: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TRANSLATE:
      return { translate: action.translate };
    default:
      return state;
  }
}
