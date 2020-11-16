import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth'

export const ADD_USER = 'ADD_USER'
export const SET_USERS = 'SET_USERS'

export const addUser = ({newUser}) => {
    return(dispatch) => {
        dispatch({ type: ADD_USER })

        axiosWithAuth()
        .post('/register', newUser)
        .then(res => {
            console.log(res.data)
            dispatch({type: SET_USERS, payload: res.data})
        }, [])
        .catch(err => {
            console.log(err)
        })
    }
}
