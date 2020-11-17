import { LOGIN } from '../actions/loginActions';

const initialState = {
    currentUser : {
        username: '',
        token: ''
    }
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
};