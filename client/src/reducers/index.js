import { LOGIN } from '../actions/loginActions'
import { REGISTER_USER } from '../actions/registerActions'
import { GET_POSTS } from '../actions/postsActions'
import { USERS_POSTS } from '../actions/usersPostsActions';
import { CREATE_POSTS } from '../actions/createPostActions';
import { GET_SINGLE_POST } from '../actions/singlePostActions';
import { DELETE_POST } from '../actions/deleteActions'

const initialstate = {
  currentUser: {},
  users: [],
  posts: [],
  usersPosts: [],
  singlePost: {}
}

export const reducer = (state = initialstate, action) => {
  switch(action.type) {
    case LOGIN: 
        return {
          ...state,
          currentUser: action.payload
      }
    case REGISTER_USER: 
      return {
          ...state, 
          users: action.payload
      }
    case GET_POSTS: 
      return {
          ...state, 
          posts: action.payload
      }
    case USERS_POSTS: 
      return {
          ...state, 
          usersPosts: action.payload
      }
    case CREATE_POSTS: 
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    case GET_SINGLE_POST:
      return {
        ...state,
        singlePost: action.payload
      }
    case DELETE_POST: 
      return {
        ...state, 
        posts: state.posts.filter(item => item !== action.payload)
      }
    default: 
      return state
  }
}