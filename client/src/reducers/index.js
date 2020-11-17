import { LOGIN } from '../actions/loginActions'
import { REGISTER_USER } from '../actions/registerActions'
import { GET_POSTS } from '../actions/postsActions'

const initialstate = {
  currentUser: {},
  users: [],
  posts: [{
    id:1,
    photo:'https://images.unsplash.com/photo-1604403018948-d66de4f8c4e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    story:'Spent some time in the mountains today!',
    user_id:1,
    posted_by:'nature-lover23',
  }],
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
    default: 
      return state
  }
}