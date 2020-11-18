import axiosWithAuth from '../utils/axiosWithAuth'

export const USERS_POSTS = 'USERS_POSTS'

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