import { connect } from 'react-redux';
import axiosWithAuth from '../utils/axiosWithAuth'

export const USERS_POSTS = 'USERS_POSTS'
//need to get the user_id for these posts. useParams?
export const getUsersPosts = (user_id) => {
    return(dispatch) => {

        axiosWithAuth()
        .get(`/posts/users/${user_id}`)
        .then(res => {
            console.log('data', res.data)
            dispatch({type: USERS_POSTS, payload: res.data})
            
        })
        .catch(err => {
            console.log(err.response)
        })
    }
}