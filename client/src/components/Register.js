import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { StyledRegister } from '../StyledComponents/StyledRegister'
import axios from 'axios'
import * as yup from 'yup'
import schema from '../validation/registerFormSchema'

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
//state    
const [newUser, setNewUser] = useState(initialValues)
const [disabled,setDisabled] = useState(true);
const [errors,setErrors] = useState(initialErrors);
const history = useHistory();

const handleChange = (evt) => {
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
    
//End Validation Changes


} // END HANDLE CHANGES

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
                <p className="error">{errors.username}</p>
                <p className="error">{errors.password}</p>
                <form onSubmit={handleSubmit}>
                <input
                type='text'
                name='username'
                placeholder='username'
                value={newUser.username}
                onChange={handleChange}
                />
                
                <input 
                type='password'
                name='password'
                placeholder='password'
                value={newUser.password}
                onChange={handleChange}
                />
  
                <button className='submit' disabled={disabled}>sign up</button>

                </form>
            </div> 
        </div>
    </StyledRegister>
    )
}


export default connect(null, { registerUser })(Register)