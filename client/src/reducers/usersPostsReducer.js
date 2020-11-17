import { USERS_POSTS } from '../actions/usersPostsActions';

const initialState = {
    usersPosts: [],
}

export const usersPostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_POSTS: 
            return {
                ...state, 
                usersPosts: action.payload
            }
        default:
            return state;
    }
};

