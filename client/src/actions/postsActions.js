import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

export const GET_POSTS = 'GET_POSTS'

export const getPosts = () => {
    return(dispatch) => {

        axiosWithAuth()
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