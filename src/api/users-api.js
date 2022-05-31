import axios from 'axios';
import instance from './login-api';


export const UserAPI = {
    fetchUsers() {
        return instance.get('/users')
    },

}