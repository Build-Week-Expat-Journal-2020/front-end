import axios from 'axios';

// UPDATE WITH CORRECT URL

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://expat-journal-api-2020.herokuapp.com',
        headers: {
            authorization: token
        }
    })
}

export default axiosWithAuth;