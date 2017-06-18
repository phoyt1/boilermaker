import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */
const FETCH_USER_PHOTO_INFO = 'FETCH_USER_PHOTO_INFO';
const ADD_USER_PHOTO = 'ADD_USER_PHOTO';

/* ------------   ACTION CREATORS     ------------------ */

export const fetchUserPhotoInfo  = (photoInfo) => {
  return {type: FETCH_USER_PHOTO_INFO, photoInfo} };

export const addPhoto  = (photo) => {
  return {type: ADD_USER_PHOTO, photo} };

/* ------------       REDUCER     ------------------ */
const initialState = {
  photoInfo: []
};
export default function reducer (state = initialState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) {

    case FETCH_USER_PHOTO_INFO:
      newState.photoInfo = action.photoInfo
      break;

    case ADD_USER_PHOTO:
      newState.photoInfo = state.photoInfo.concat(action.photo)
      break;

    default:
      newState = state;
  }

  return newState;
}



/* ------------       DISPATCHERS     ------------------ */

export const storeUploadedPhoto = (photo) => dispatch => {
  axios.post('/api/photos', photo)
       .then(createdPhoto => {
         dispatch(addPhoto(createdPhoto.data))
        })
        .catch(err => console.error(err));
}
