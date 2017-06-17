import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';

/* ------------   ACTION CREATORS     ------------------ */

export const getAllStudents  = (students) => {
  return {type: GET_ALL_STUDENTS, students} };

/* ------------       REDUCER     ------------------ */
const initialState = {
  studentArr: [],
  selectedStudent: {
    campus: {
      image: '',
      name: ''
    },
    name: '',
    email: ''
  }
};
export default function reducer (state = initialState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) {

    case GET_ALL_STUDENTS:
      newState.studentArr = action.students
      break;

    default:
      newState = state;
  }

  return newState;
}



/* ------------       DISPATCHERS     ------------------ */

export const sendUploadedPhoto = (photo) => dispatch => {
  axios.post('/s3')
       .then(foundStudent => {
         dispatch(getStudent(foundStudent.data))
        })
        .catch(err => console.error(err));
}
