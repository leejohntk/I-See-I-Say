import axios from 'axios';

// ACTION TYPES
const DETECTED_OBJS = 'DETECTED_OBJS';

// ACTION CREATORS
export const gotDetectedObjectsInImage = (detectedObjs) => {
  return {
    type: DETECTED_OBJS,
    detectedObjs,
  };
};

// THUNK CREATORS

export const detectObjsInPhoto = (imageInfo) => {
  return async (dispatch) => {
    //sets loading text immedately uses 100ms timeout before Vision API call
    dispatch(gotDetectedObjectsInImage(['Loading...']));
    const imgInObj = { img: imageInfo };
    const detectedObjectsFromImage = await axios.post('/api/vision', imgInObj);
    setTimeout(() => {
          dispatch(gotDetectedObjectsInImage(detectedObjectsFromImage.data));
    }, 100);
  };
};

// REDUCER

const initialState = {
  detectedObjs: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DETECTED_OBJS:
      return { ...state, detectedObjs: action.detectedObjs };
    default:
      return state;
  }
}
