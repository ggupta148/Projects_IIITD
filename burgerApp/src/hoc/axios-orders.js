import axios from 'axios';

const instance= axios.create({
    baseURL:"https://react-burger-app-bab24.firebaseio.com/"
});

export default instance;