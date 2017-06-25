'use strict'
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


import { List, ListItem, ListItemContent } from 'react-mdl';

class UserSearchContainer extends React.Component {
  constructor(props){
    super(props)
  }
  render (props) {
    console.log('PROPS',this.props)
    var allUsers = this.props.allUsers;
    allUsers = allUsers.sort(function (a, b) {
      return b.email[0] - a.email[0];
    })
    return (
      <List>
      {
        allUsers.map(user => {
          return (
            <ListItem key={user.id}>
              <Link to={`/search/${user.id}`}><ListItemContent icon="person">{user.email}</ListItemContent></Link>
            </ListItem>
          )
        })
      }
      </List>
    )
  }
}

// Container //

const mapState = ({ users }) => ({
    allUsers: users.allUsers.map(user => {
      return {
        email: user.email,
        id: user.id
      }
    })
});

// const mapDispatch = dispatch => ({
//   // upload (photo) {
//   //   dispatch(storeUploadedPhoto(photo));
//   // }
// });

export default connect(mapState, null)(UserSearchContainer);
