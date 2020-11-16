import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth'

export const REGISTER_USER = 'REGISTER_USER'

export const registerUser = ({newUser}) => {
    return(dispatch) => {

        axiosWithAuth()
        .post('/auth/register', newUser)
        .then(res => {
            dispatch({type: REGISTER_USER, payload: res.data})
            console.log('data', res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
}
