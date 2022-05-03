import axios from 'axios';

const axiosInstance = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com/',
   timeout: 1000
})

const apiGet = async (resource) => {
   return axiosInstance.get(resource)
      .then((response) => {
         return response?.data;
      })
      .catch((error) => {
         console.log(error);
         return error;
      })
}

const apiPost = async (resource, obj, config) => {
   return axiosInstance.post(resource, obj, config)
      .then((response) => {
         return response?.data;
      })
      .catch((error) => {
         return error;
      })
}

export { apiGet, apiPost }