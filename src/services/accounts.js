import { authAxios } from '../services/httpServices';
// import axios from 'axios'



export function getAccounts() {
    return authAxios.getAccounts('http://127.0.0.1:8000/api/create/account/');
}

// export function getUserAccounts(id) {
//     return authAxios.get(`http://127.0.0.1:8000/api/user-accounts/${id}`);
// }
