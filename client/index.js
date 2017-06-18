import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import store from './store';
import { Main, Login, Signup, UserHome, UserHomeContainer, OtherUserContainer, UserSearchContainer } from './components';
import { me } from './reducer/user';
import { fetchUserPhotoInfo, fetchOtherUserPhotoInfo } from './reducer/userPosts'
import { fetchAllUsers } from './reducer/users'
import axios from 'axios';

const whoAmI = store.dispatch(me());

const requireLogin = (nextRouterState, replace, next) =>
  whoAmI
    .then(() => {
      const { user } = store.getState();
      if (!user.id) replace('/login');
      next();
    })
    .catch(err => console.log(err));

const getUserPhotoInfo = function(){
  const { user } = store.getState();
  axios.get(`/api/photos/${user.id}`)
    .then(foundUrls => {
      store.dispatch(fetchUserPhotoInfo(foundUrls.data));
    })
    .catch(err => {console.error(err)})
}

const getOtherUserPhotoInfo = function(nextRouterState){
  const otherUserId = nextRouterState.params.id;
  axios.get(`/api/photos/${otherUserId}`)
    .then(foundUrls => {
      store.dispatch(fetchOtherUserPhotoInfo(foundUrls.data));
    })
    .catch(err => {console.error(err)})
}

const getUsers = function(){
  axios.get(`/api/users`)
    .then(foundUsers => {
      store.dispatch(fetchAllUsers(foundUsers.data));
    })
    .catch(err => {console.error(err)})
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <Route path="login" component={Login} />
        <Route path="signup" component={Signup} />
        <Route onEnter={requireLogin}>
          <Route path="home" onEnter={getUserPhotoInfo} component={UserHomeContainer} />
          <Route path="/search" onEnter={getUsers} component={UserSearchContainer} />
          <Route path="/search/:id" onEnter={getOtherUserPhotoInfo} component={OtherUserContainer} />
          <IndexRedirect to="/home" />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
