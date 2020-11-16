// import { axiosWithAuth } from '../utils/axiosWithAuth'

// export const FETCH_POSTS_START = 'FETCH_POSTS_START'
// export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
// export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

// export const LOGIN_USER = 'LOGIN_USER'
// export const REGISTER_USER = 'REGISTER_USER'

// export const UPDATE_POST_START = 'ADD_POST_START'
// export const UPDATE_POST_SUCCESS = 'ADD_POST_SUCCESS' 
// export const UPDATE_POST_FAILURE = 'ADD_POST_FAILURE'

// export const DELETE_POST_START = 'ADD_POST_START'
// export const DELETE_POST_SUCCESS = 'ADD_POST_SUCCESS' 
// export const DELETE_POST_FAILURE = 'ADD_POST_FAILURE'


// export const loginUser = ({
//     user, responseCallback
// }) => dispatch => {
//     axiosWithAuth()
//     .post('/auth/login', user)
//     .then(res => {
//         dispatch({ type: LOGIN_USER, payload: res.data })
//         responseCallback(res)
//     })
//     .catch(err => console.log(err))
// }

// export const registerUser = ({
//     newUser, responseCallback
// }) => dispatch => {
//     axiosWithAuth()
//     .post('/auth/register', newUser)
//     .then(res => {
//         dispatch({ type: REGISTER_USER, payload: res.data })
//         responseCallback(res)
//     })
//     .catch(err => console.log(err))
// }

// export const getPosts = () => dispatch => {
//     dispatch({ type: FETCH_POSTS_START })
//     axiosWithAuth()
//     .get('/posts')
//     .then(res => {
//         console.log(res.data)
//         dispatch({ type: FETCH_POSTS_SUCCESS, payload: res.data })
//     })
//     .catch(err => {
//         dispatch({ type: FETCH_POSTS_FAILURE, payload: err.message})
//     })
// }

// export const addPost = () => dispatch => {
//     dispatch({ type: ADD_POST_START})
//     axiosWithAuth()
//     .put('/posts/:id')
//     .then(res => {
//         console.log(res.data)
//         dispatch({ type: ADD_POSTS_SUCCESS, payload: res.data })
//     })
//     .catch(err => {
//         dispatch({ type: ADD_POSTS_FAILURE, payload: err.message})
//     })

// export const deletePost = () => dispatch => {
//     dispatch({ type: DELETE_POST_START})
//     axiosWithAuth()
//     .delete('/posts/:id')
//     .then(res => {
//         console.log(res.data)
//         dispatch({ type: DELETE_POSTS_SUCCESS, payload: res.data })
//     })
//     .catch(err => {
//         dispatch({ type: DELETE_POSTS_FAILURE, payload: err.message})
//     })

// }