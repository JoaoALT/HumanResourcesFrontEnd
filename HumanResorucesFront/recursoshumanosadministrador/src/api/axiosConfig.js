import axios from 'axios';

export default axios.create({
    baseURL:'https://humanresourcesapp-1.onrender.com',
    headers: {"Access-Control-Allow-Origin": "*"}
});