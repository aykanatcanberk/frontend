import axios from 'axios';
const addAdvert = (newAdvert) => {
    const apiUrl = 'http://localhost:3000/kurumsal-ilanlar'; 
    return axios.post(apiUrl, newAdvert);
  };
  
  export default addAdvert;