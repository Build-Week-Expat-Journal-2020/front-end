import axiosWithAuth from '../utils/axiosWithAuth'

export const CREATE_POSTS = 'CREATE_POSTS'

export const createPost = (newPost) => {
     return(dispatch) => {

        return axiosWithAuth()
            .post('/posts', newPost)
            .then(res => {

                console.log('data', res.data) 
                dispatch({ type: CREATE_POSTS, payload: res.data})
            })
            .catch(err => {
                console.log('error', err.response)
            })
    }
}