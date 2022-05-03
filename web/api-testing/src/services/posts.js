import { apiGet, apiPost, apiPut, apiDelete } from './genericServices';

const getPosts = async () => {
   return await apiGet('posts');
}

const addPosts = async (resource, obj, config) => {
   return await apiPost(resource, obj, config);
}

const updatePosts = async (resource, obj, config) => {
   return await apiPut(resource, obj, config);
}

const deletePost = async (resource) => {
   return await apiDelete(resource);
}

export { getPosts, addPosts, updatePosts, deletePost }