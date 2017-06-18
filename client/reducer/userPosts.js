import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */
const FETCH_USER_PHOTO_INFO = 'FETCH_USER_PHOTO_INFO';

/* ------------   ACTION CREATORS     ------------------ */

export const fetchUserPhotoInfo  = (urls) => {
  return {type: FETCH_USER_PHOTO_INFO, urls} };

/* ------------       REDUCER     ------------------ */
const initialState = {
  photoInfo: []
};
export default function reducer (state = initialState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) {

    case FETCH_USER_PHOTO_INFO:
      newState.photoInfo = action.urls
      break;

    default:
      newState = state;
  }

  return newState;
}



/* ------------       DISPATCHERS     ------------------ */

// export const sendUploadedPhoto = (photo) => dispatch => {
//   axios.post('/s3')
//        .then(foundStudent => {
//          dispatch(getStudent(foundStudent.data))
//         })
//         .catch(err => console.error(err));
// }
