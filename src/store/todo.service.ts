import axios from 'axios';

function getTodo() {
    return axios.get('https://jsonplaceholder.typicode.com/todos');
}

export default getTodo;
