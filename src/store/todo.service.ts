import axios from 'axios';

function getTodo({ page = 1, limit = 10 }) {
    return axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`);
}

export default getTodo;
