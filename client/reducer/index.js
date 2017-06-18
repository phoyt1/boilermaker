import { combineReducers } from 'redux';
import user from './user';
import userPosts from './userPosts';

export default combineReducers({ user, userPosts });
