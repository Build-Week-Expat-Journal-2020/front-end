import axiosWithAuth from '../utils/axiosWithAuth';

export const LOGIN = "LOGIN";

export const login = (user) => {
  
    return(dispatch) => {

        axiosWithAuth()
            .post('/auth/login', user)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                dispatch({ type: LOGIN, payload: res.data }); 
                console.log('data', res.data, res.data.token) 
            })
            .catch(err => {
                console.log(err.response)
            })
    };
}   

