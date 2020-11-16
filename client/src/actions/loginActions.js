import axiosWithAuth from '../utils/axiosWithAuth';

export const LOGIN = "LOGIN";

export const login = () => {

    return(dispatch) => {
        dispatch ({ type: LOGIN });

        axiosWithAuth()
            .post('/login', credentials)
            .then(res => {
                dispatch({ type: LOGIN, payload: res.data });  
                responseCallback(res);  
            })
            .catch(err => console.log(err))
    };
}   

