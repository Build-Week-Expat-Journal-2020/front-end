import { REGISTER_USER } from '../actions/registerActions'

const initialState = {
    users: [],
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER: 
            return {
                ...state, 
                users: action.payload
            }
        default:
            return state;
    }
};