import axiosWithAuth from '../utils/axiosWithAuth';

export const EDIT_POST = 'EDIT_POST'

export const editPosts = (id, postToEdit) => {
     return(dispatch) => {

        return axiosWithAuth()
            .put(`/posts/${id}`, postToEdit)
            .then(res => {
                dispatch({ type: EDIT_POST, payload: res.data})

            })
            .catch(err => {
                console.log('error', err.response)
            })
    }
}

