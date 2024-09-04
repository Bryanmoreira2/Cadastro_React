import axios from "axios";


const api = axios.create({
    baseURL: 'https://api-cadastro-jtd8.onrender.com'
})

export default api 
