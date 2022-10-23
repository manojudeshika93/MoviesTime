import axios from 'react-native-axios';
import {BASE_URL, API_KEY} from '@env';

axios.interceptors.request.use(
  async config => {
    config.headers['Content-Type'] = 'application/json';
    config.headers.Authorization = API_KEY;
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

export const createHttpClient = (url, params, method, data) => {
  return new Promise((resolve, reject) => {
    axios({
      method,
      url: `${BASE_URL}${url}`,
      params,
      data: JSON.stringify(data),
    })
      .then(response => {
        if (response.status > 199 && response.status < 300) {
          const responseData = response.data;
          resolve(responseData);
        } else {
          reject('Response is not success');
        }
      })
      .catch(error => {
        console.log('API error:', {error});
        reject(error);
      });
  });
};
