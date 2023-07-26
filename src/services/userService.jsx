import axios from 'axios';

function getUserById(id) {
    axios.get(`http://localhost:3000/user/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}

function getUserByName(name) {
    axios.get(`http://localhost:3000/user/${name}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}

export default [getUserById, getUserByName]