import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { StyledRegister } from '../StyledComponents/StyledRegister'
import axios from 'axios'
import { registerFormSchema } from '../validation/registerFormSchema';
// --- Needs form to register user
// --- Unit 2 do JSX with local state
// --- for formValues and form validations

import { registerUser } from '../actions/registerActions'

const initialValues = {
    username: '',
    password: '',
}

const initialErrors = {
    username: '',
    password: ''
}

const Register = ({ registerUser }) => {
const [newUser, setNewUser] = useState(initialValues)
const [disabled,setDisabled] = useState(true);
const [errors,setErrors] = useState(initialErrors);
const history = useHistory()

const handleChange = (e) => {
//Validation Changes
    const {name,value}=evt.target;

yup.reach(schema,name)
.validate(value)
.then(()=>{
   setErrors({
      ...errors,[name]: '',
})
})
.catch((err)=>{
    setErrors({
        ...errors,[name]:err.errors[0]
    })
})
setNewUser({...newUser,[name]:value})
}
//End Validation Changes
    setNewUser({
        ...newUser, 
        [e.target.name]: e.target.value
    })
}

useEffect(()=>{
    schema.isValid(newUser).then(valid=>{
        setDisabled(!valid);
    });
    },[newUser])

const handleSubmit = (e) => {
    e.preventDefault()
    registerUser({newUser})
    setNewUser(initialValues)
    history.push('/')

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
                <p>{errors.username}</p>
                <input 
                type='text'
                name='password'
                placeholder='password'
                value={newUser.password}
                onChange={handleChange}
                />
                <p>{errors.password}</p>
                <button className='submit'>sign up</button>
                </form>
            </div> 
        </div>
    </StyledRegister>
)
}

export default connect(null, { registerUser })(Register)