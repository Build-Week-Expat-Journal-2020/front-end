import axiosWithAuth from '../utils/axiosWithAuth';

export const LOGIN = "LOGIN";

export const login = (user) => {
  
    return(dispatch) => {

        axiosWithAuth()
            .post('/auth/login', user)
            .then(res => {
                console.log(user)
                localStorage.setItem("token", res.data.payload);
                dispatch({ type: LOGIN, payload: res.data }); 
                console.log('data', res.data) 
            })
            .catch(err => console.log(err.response))
    };
}   

