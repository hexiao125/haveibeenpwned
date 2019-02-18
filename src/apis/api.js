import axios from 'axios';

export default axios.create({
    baseURL: 'https://haveibeenpwned.com/api/v2/breaches',
});

