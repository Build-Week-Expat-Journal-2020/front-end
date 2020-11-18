import axiosWithAuth from '../utils/axiosWithAuth'
import { getPosts } from '../actions/postsActions'

export const DELETE_POST = 'DELETE_POST'

export const deletePost = (id) => {
    return(dispatch) => {

        axiosWithAuth()
        .delete(`/posts/${id}`)
        .then(res => {
            dispatch({ type: DELETE_POST, payload: res.data })
        })
        .catch(err => {
            console.log(err.response)
        })
    }
}