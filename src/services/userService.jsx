import axios from 'axios';

export function getCompany(id) {const baseUrl = 'http://localhost:3000/info-firma'; const url = id ? `${baseUrl}/${id}` : baseUrl; return axios.get(url);}