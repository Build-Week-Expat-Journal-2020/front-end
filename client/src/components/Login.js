import React, { useState } from "react";
import { login } from '../actions/loginActions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

// --- Needs Login Form 
// --- Unit 2 do JSX with local state
// --- for formValues
const initialValues = {
    credentials: {username: '', password: ''}
}

const Login = () => {
    const [formValues, setFormValues] = useState(initialValues);
    const { push } = useHistory();

    handleChange = e => {
        setFormValues({
            credentials: {
              ...formValues.credentials,
              [e.target.name]: e.target.value
            }
          });
    };

    handleSubmit = e => {
        e.preventDefault();
        login(formValues.credentials);
        localStorage.setItem("token", res.data.payload);
        push('/homefeed');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="name"
                value={formValues.credentials.username}
                placeholder="name"
                onChange={handleChange}
                />
                <input
                type="password"
                name="password"
                value={formValues.credentials.password}
                placeholder="name"
                onChange={handleChange}
                />
                <button>Login</button>
            </form>
        </div>
    )
}



export default connect(null, { login })(Login);