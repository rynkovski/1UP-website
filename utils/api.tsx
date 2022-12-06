import Axios from 'axios';
import { logoutUser } from '../zustand/stores/useAuthorizationStore';

const api = Axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

api.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    console.error('Error', error);
    switch (error.response.status) {
      case 401:
        console.error('401');
        logoutUser();
        break;
      case 403:
        console.error('Brak uprawnien');
        window.history.pushState('', 'Brak uprawnień', '/');
        logoutUser();
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default api;

export const is5xxError = (error: any) => {
  return error?.response?.status >= 500 && error?.response?.status < 600;
};