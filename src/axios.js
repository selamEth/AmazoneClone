import axios from 'axios';
const instance = axios.create({
    // baseURL: 'http://127.0.0.1:5001/clone--frontend/us-central1/api',
    baseURL: 'http://127.0.0.1:5000',

});
// instance.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         console.error('Axios Error:', error);
//         return Promise.reject(error);
//     }
// );

export default instance;