import axiosWithAuth from '../utils/axiosWithAuth'

export const GET_SINGLE_POST = "GET_SINGLE_POST"

export const getSinglePost = (id) => {
    return(dispatch) => {

        return axiosWithAuth()
            .get(`/posts/${id}`)
            .then(res => {
                dispatch({ type: GET_SINGLE_POST, payload: res.data})
            })
            .catch(err => {
                console.log('error', err.response)
            })
    }
}