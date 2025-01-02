import axios from 'axios';
import queryString from 'query-string';
const backendUrl = import.meta.env.VITE_API_URL;


const baseURL = `${backendUrl}/api`;

console.log(baseURL)

const getToken = () => localStorage.getItem('token');

const axiosClient = axios.create({
    baseURL,
    paramsSerializer: params => queryString.stringify({params}),
    withCredentials: true
});

axiosClient.interceptors.request.use(async config => {
    return {
        ...config,
        headers:{
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${getToken()}`
        }
    }
});

axiosClient.interceptors.response.use(response =>{
    if(response && response.data){
        return response.data
    }
    return response;
}, err =>{
    if(!err.response){
        return console.log(err);
    }
    throw err.response;
})
export default axiosClient;