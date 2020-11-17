import axiosWithAuth from '../utils/axiosWithAuth'

export const GET_POSTS = 'GET_POSTS'

export const getPosts = () => {
     return(dispatch) => {

        return axiosWithAuth()
            .get('/posts')
            .then(res => {
                dispatch({ type: GET_POSTS, payload: res.data})
            })
            .catch(err => {
                console.log('error', err.response)
            })
    }
}
