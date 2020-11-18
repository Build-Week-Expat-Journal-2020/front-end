import axiosWithAuth from '../utils/axiosWithAuth';

export const EDIT_POST = 'EDIT_POST'

export const editPosts = (id) => {
     return(dispatch) => {

        return axiosWithAuth()
            .put(`/posts/${id}`)
            .then(res => {
                dispatch({ type: EDIT_POST, payload: res.data})
            })
            .catch(err => {
                console.log('error', err.response)
            })
    }
}

