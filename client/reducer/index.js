import { combineReducers } from 'redux';
import user from './user';
import userPosts from './userPosts';
import users from './users';

export default combineReducers({ user, userPosts, users });
