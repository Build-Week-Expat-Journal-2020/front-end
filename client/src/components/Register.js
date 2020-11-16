import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'

// --- Needs form to register user
// --- Unit 2 do JSX with local state
// --- for formValues and form validations

import { addUser } from '../actions/registerActions'


const StyledRegister = styled.div`

    .container {
        background-color: black;
        height: 100vh;
    }

    .addUserForm {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 5%;
        color: white;
    }

    .addUserForm p {
        width: 25rem;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        margin: 2%;
        width: 25rem;
    }

    input, button {
        padding: 3%;
        margin: 1%;
    }

    .submit {
        background-color: #1E90FF;
        border: none;
        color: white;
        padding: 4%;
        border-radius: 0.3rem;
    }

`

const initialValues = {
    username: '',
    password: '',
}

const Register = ({ addUser }) => {
const [newUser, setNewUser] = useState(initialValues)
const hisoty = useHistory()

const handleChange = (e) => {
    setNewUser({
        ...newUser, 
        [e.target.name]: e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault()
    addUser(newUser)
    setNewUser(initialValues)

}

const responseCallback = res => {
    localStorage.setItem('token', res.data.token)
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

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { addUser })(Register)