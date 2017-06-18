'use strict'
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


//import { Card, CardTitle, CardActions, CardText, Textfield, Button } from 'react-mdl';

class UserSearchContainer extends React.Component {
  constructor(props){
    super(props)
  }
  render (props) {
    console.log('PROPS',this.props)
    return (
      <p>Users will be listed here</p>
    )
  }
}

// Container //

const mapState = ({ users }) => ({
    allUsers: users.allUsers
});

const mapDispatch = dispatch => ({
  // upload (photo) {
  //   dispatch(storeUploadedPhoto(photo));
  // }
});

export default connect(mapState, null)(UserSearchContainer);
