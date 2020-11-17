import { GET_POSTS } from '../actions/postsActions'

const initialState = {
    posts: [{
        id:1,
        photo:'https://images.unsplash.com/photo-1604403018948-d66de4f8c4e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        story:'Spent some time in the mountains today!',
        user_id:1,
        posted_by:'nature-lover23',
    }]
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS: 
            return {
                ...state, 
                posts: [...state.posts, action.payload]
            }
        default: 
            return state
    }
}