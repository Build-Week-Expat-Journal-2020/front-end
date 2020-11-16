import axiosWithAuth from '../utils/axiosWithAuth';

export const LOGIN = "LOGIN";

export const login = (user, responseCallback) => {

    return(dispatch) => {

        axiosWithAuth()
            .post('/login', user)
            .then(res => {
                localStorage.setItem("token", res.data.payload);
                dispatch({ type: LOGIN, payload: res.data });  
                responseCallback(res);  
            })
            .catch(err => console.log(err))
    };
}   

