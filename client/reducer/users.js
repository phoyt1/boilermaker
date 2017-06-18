'use strict'
// import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */
const FETCH_ALL_USERS = 'FETCH_ALL_USERS';

/* ------------   ACTION CREATORS     ------------------ */

export const fetchAllUsers  = (users) => {
  return {type: FETCH_ALL_USERS, users} };

/* ------------       REDUCER     ------------------ */
const initialState = {
  allUsers: []
};
export default function reducer (state = initialState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) {

    case FETCH_ALL_USERS:
      newState.allUsers = action.users
      break;

    default:
      newState = state;
  }

  return newState;
}



/* ------------       DISPATCHERS     ------------------ */

// export const storeUploadedPhoto = (photo) => dispatch => {
//   axios.post('/api/photos', photo)
//        .then(createdPhoto => {
//          dispatch(addPhoto(createdPhoto.data))
//         })
//         .catch(err => console.error(err));
// }
