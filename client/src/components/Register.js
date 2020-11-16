import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { StyledRegister } from '../StyledComponents/StyledRegister'

// --- Needs form to register user
// --- Unit 2 do JSX with local state
// --- for formValues and form validations

import { registerUser } from '../actions/registerActions'

const initialValues = {
    username: '',
    password: '',
}

const Register = ({ registerUser }) => {
const [newUser, setNewUser] = useState(initialValues)
const history = useHistory()

const handleChange = (e) => {
    setNewUser({
        ...newUser, 
        [e.target.name]: e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newUser)
    registerUser(newUser)
    setNewUser(initialValues)

    const responseCallback = res => {
        localStorage.setItem('token', res.data.token)
        console.log(res.data)
        history.push('/')
    }

    registerUser({newUser, responseCallback})

}

return (
    <StyledRegister>
        <div className='container'>
            <div className='addUserForm'>
                <h3>Create Username</h3>
                <p>Pick a username for your new account. You can always change it later.</p>
                <form onSubmit={handleSubmit}>
                <input
                type='text'
                name='username'
                placeholder='username'
                value={newUser.username}
                onChange={handleChange}
                />
                <input 
                type='text'
                name='password'
                placeholder='password'
                value={newUser.password}
                onChange={handleChange}
                />
                <button className='submit'>sign up</button>
                </form>
            </div> 
        </div>
    </StyledRegister>
)
}

export default connect(null, { registerUser })(Register)