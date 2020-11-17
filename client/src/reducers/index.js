import { combineReducers } from 'redux';
import { registerReducer } from './registerReducer';
import { loginReducer } from './loginReducer';
import { postsReducer } from './postsReducer';
import { usersPostsReducer } from './usersPostsReducer';

export default combineReducers({
  registerReducer,
  loginReducer,
  postsReducer,
  usersPostsReducer
});