// import React, { useState } from "react";
// import { login } from '../actions/loginActions';
// import { connect } from 'react-redux';
// import { useHistory, Link } from 'react-router-dom';

// import { StyledLogin } from '../StyledComponents/StyledLogin'

// // --- Needs Login Form 
// // --- Unit 2 do JSX with local state
// // --- for formValues
// const initialValues = {
//     credentials: {username: '', password: ''}
// }

// const Login = () => {
//     const [formValues, setFormValues] = useState(initialValues);
//     const { push } = useHistory();

//     const handleChange = e => {
//         setFormValues({
//             credentials: {
//               ...formValues.credentials,
//               [e.target.name]: e.target.value
//             }
//           });
//     };

//     const handleSubmit = e => {
//         e.preventDefault();
//         login(formValues.credentials);
//         // localStorage.setItem("token", res.data.payload);
//         // push('/homefeed');
//     };

//     return (
//         <StyledLogin>
//             <div className='container'>
//                 <div className='loginForm'>
//                 <h3>Expat</h3>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                     type="text"
//                     name="name"
//                     value={formValues.credentials.username}
//                     placeholder="username"
//                     onChange={handleChange}
//                     />
//                     <input
//                     type="password"
//                     name="password"
//                     value={formValues.credentials.password}
//                     placeholder="password"
//                     onChange={handleChange}
//                     />
//                     <button>Login</button>
//                     <div className='span'>
//                         <p>Don't have an account? </p>
//                         <Link className='signUpLink' to='/register'>Sign Up</Link>
//                     </div>
                
//                 </form>

//                 </div>
//             </div>
//         </StyledLogin>
//     )
// }



// export default connect(null, { login })(Login);