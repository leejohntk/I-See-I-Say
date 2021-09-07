// ACTION TYPES
const SELECTED_LANGUAGE = 'SELECTED_LANGUAGE';

// ACTION CREATORS
export const selectedLanguage = (selectedLanguage) => {
    return {
      type: SELECTED_LANGUAGE,
      selectedLanguage,
    };
  };

  const initialState = {
    selectedLanguage: 'fr', //default language = French
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case SELECTED_LANGUAGE:
        return { ...state, selectedLanguage: action.selectedLanguage };
      default:
        return state;
    }
  }
  