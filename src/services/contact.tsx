import axios from 'axios';

const Client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
});

const send = async (data) => {
    const response = await Client.post('/contact', data);
    return response.data;
}

const newsLatest = async (data) => {
    const response = await Client.post('/newslatest', data);
    return response.data;
}

export { send, newsLatest }