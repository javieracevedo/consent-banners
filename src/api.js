import axios from 'axios';

export const baseURL = 'http://localhost:3000/api';

export default axios.create({ baseURL });
