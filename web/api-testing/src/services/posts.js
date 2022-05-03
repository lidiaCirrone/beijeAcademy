import { apiGet, apiPost } from './genericServices';

const getPosts = async () => {
   return await apiGet('posts');
}
const addPosts = async (resource, obj, config) => {
   return await apiPost(resource, obj, config);
}

export { getPosts, addPosts }