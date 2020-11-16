import { ADD_USER, SET_USERS } from '../actions/registerActions'

const initialState = {
    users: [],
}


export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER: 
            return {
                ...state, 
                users: action.payload
            }
        case SET_USERS: 
            return {
                ...state, 
                users: action.payload
            }
        default:
            return state;
    }
};