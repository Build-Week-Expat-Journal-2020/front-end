import axiosWithAuth from '../utils/axiosWithAuth'

export const CREATE_POSTS = 'CREATE_POSTS'

export const createPost = (newPost) => {
     return(dispatch) => {

        console.log('new post?',newPost)

        return axiosWithAuth()
            .post('/posts', newPost)
            .then(res => {

                dispatch({ type: CREATE_POSTS, payload: res.data})
                console.log('data', res.data) 
            })
            .catch(err => {
                console.log('error', err.response)
            })
    }
}