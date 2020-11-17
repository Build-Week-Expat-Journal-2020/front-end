import axiosWithAuth from '../utils/axiosWithAuth'

export const CREATE_POSTS = 'CREATE_POSTS'

export const createPost = () => {
     return(dispatch) => {

        return axiosWithAuth()
            .get('/posts')
            .then(res => {
                dispatch({ type: GET_POSTS, payload: res.data})
                console.log('data', res.data) 
            })
            .catch(err => {
                console.log('error', err.response)
            })
    }
}