import { apiGet, apiPost, apiPut } from './genericServices';

const getPosts = async () => {
   return await apiGet('posts');
}

const addPosts = async (resource, obj, config) => {
   return await apiPost(resource, obj, config);
}
const updatePosts = async (resource, obj, config) => {
   return await apiPut(resource, obj, config);
}

export { getPosts, addPosts, updatePosts }