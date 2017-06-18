'use strict'
import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */
const FETCH_USER_PHOTO_INFO = 'FETCH_USER_PHOTO_INFO';
const FETCH_OTHER_USER_PHOTO_INFO = 'FETCH_OTHER_USER_PHOTO_INFO';
const ADD_USER_PHOTO = 'ADD_USER_PHOTO';

/* ------------   ACTION CREATORS     ------------------ */

export const fetchUserPhotoInfo  = (photoInfo) => {
  return {type: FETCH_USER_PHOTO_INFO, photoInfo} };

export const fetchOtherUserPhotoInfo = (photoInfo) => {
  return {type: FETCH_OTHER_USER_PHOTO_INFO, photoInfo} };

export const addPhoto  = (photo) => {
  return {type: ADD_USER_PHOTO, photo} };

/* ------------       REDUCER     ------------------ */
const initialState = {
  photoInfo: [],
  otherUserPhotoInfo: []
};
export default function reducer (state = initialState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) {

    case FETCH_USER_PHOTO_INFO:
      newState.photoInfo = action.photoInfo
      break;

    case FETCH_OTHER_USER_PHOTO_INFO:
      newState.otherUserPhotoInfo = action.photoInfo
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
