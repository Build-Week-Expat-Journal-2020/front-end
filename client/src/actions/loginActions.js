import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom'

export const LOGIN = "LOGIN";

export const login = () => {
    
    return(dispatch) => {
        dispatch ({ type: LOGIN });

        axiosWithAuth()
            .post('/auth/login')
            .then(res => {
                dispatch({ type: LOGIN, payload: res.data });    
            })
            .catch(err => console.log(err))
    };
}   

