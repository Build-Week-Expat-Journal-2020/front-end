import * as yup from 'yup';

export  default yup.object().shape({
    username: yup
    .string()
    .required("Username is required")
    .min(5,"Minimum length is 5 characters"),
    password: yup
    .string()
    .required('Password is required')
    .min(5,"Minimum length is 5")
}) 

//export default registerFormSchema;