import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store';
import { Main, Login, Signup, UserHome, UserHomeContainer } from './components';
import { me } from './reducer/user';
import { fetchUserPhotoInfo } from './reducer/userPosts'
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
  console.log("HERE!!@3")
  const { user } = store.getState();
  axios.get(`/api/photos/${user.id}`)
    .then(foundUrls => {
      store.dispatch(fetchUserPhotoInfo(foundUrls.data));
    })
    .catch(err => {console.error(err)})
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Login} />
        <Route path="login" component={Login} />
        <Route path="signup" component={Signup} />
        <Route onEnter={requireLogin}>
          <Route path="home" onEnter={getUserPhotoInfo} component={UserHomeContainer} />
          <Route path="/s3/sign" component={UserHomeContainer} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
