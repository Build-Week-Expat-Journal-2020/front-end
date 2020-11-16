import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth'

export const REGISTER_USER = 'REGISTER_USER'

export const registerUser = ({newUser, responseCallback}) => {
    return(dispatch) => {

        axiosWithAuth()
        .post('/users', newUser)
        .then(res => {
            console.log(res.data)
            dispatch({type: REGISTER_USER, payload: res.data})
            responseCallback(res)
        }, [])
        .catch(err => {
            console.log(err)
        })
    }
}
