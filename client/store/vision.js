import axios from 'axios';

// ACTION TYPES
const DETECTED_OBJ = 'DETECTED_OBJ';

// ACTION CREATORS
export const gotDetectedObjectsInImage = (detectedObj) => {
  return {
    type: DETECTED_OBJ,
    detectedObj,
  };
};

// THUNK CREATORS

export const detectObjsInPhoto = (imageInfo) => {
  return async (dispatch) => {
    const imgInObj = { img: imageInfo };

    const detectedObjectsFromImage = await axios.post('/api/vision', imgInObj);
    dispatch(gotDetectedObjectsInImage(detectedObjectsFromImage));
  };
};

// REDUCER

const initialState = {
  detectedObj: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DETECTED_OBJ:
      return { detectedObj: action.detectedObj };
    default:
      return state;
  }
}
