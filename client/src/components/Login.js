import React, { useState } from "react";
import { login } from '../actions/loginActions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

// --- Needs Login Form 
// --- Unit 2 do JSX with local state
// --- for formValues



const initialValues = {
    username: '', 
    password: ''
}

const Login = () => {
    const [formValues, setFormValues] = useState(initialValues);
    const { push } = useHistory();

const handleChange = e => {
        setFormValues({
              ...formValues,
              [e.target.name]: e.target.value
          });
    };

const handleSubmit = e => {
    e.preventDefault();
    const user = {
        email: formValues.username,
        password: formValues.password
    }
    

const responseCallback = res => {
    localStorage.setItem("token", res.data.token);
    push('/homefeed');
}

login({ user, responseCallback });
};

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="username"
                value={formValues.username}
                placeholder="username"
                onChange={handleChange}
                />
                <input
                type="password"
                name="password"
                value={formValues.password}
                placeholder="password"
                onChange={handleChange}
                />
                <button>Login</button>
            </form>
            <button onClick={()=>{push('/register')}}>Register</button>
        </div>
    )
}



export default connect(null, { login })(Login);