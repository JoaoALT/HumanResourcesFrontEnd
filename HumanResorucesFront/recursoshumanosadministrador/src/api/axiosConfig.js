import axios from 'axios';

export default axios.create({
    baseURL:'https://humanresourcesbackend.onrender.com',
    headers: {"Access-Control-Allow-Origin": "*"}
});