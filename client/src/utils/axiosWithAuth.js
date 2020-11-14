import axios from 'axios';

// UPDATE WITH CORRECT URL

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: {
            authorization: token
        }
    })
}

export default axiosWithAuth;