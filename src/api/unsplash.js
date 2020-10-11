import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID zdDfllJi1Ej20Wd7pSk_jz5Zd8paaLtyxd_lsqrfYMc' 
    }
});