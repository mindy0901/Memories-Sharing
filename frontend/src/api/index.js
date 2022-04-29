import axios from 'axios';

const BASE_URL = 'http://localhost:5000/';
const user = JSON.parse(localStorage.getItem('profile'));

const publicRequest = axios.create({
      baseURL: BASE_URL,
});

const userRequest = axios.create({
      baseURL: BASE_URL,
      headers: { token: `Bearer ${user?.token}` },
});

export const getPostsAxios = () => publicRequest.get('/posts');
export const getPostAxios = (id) => publicRequest.get(`/posts/${id}`)
export const getPostsBySearchAxios = (searchForm) => publicRequest.get(`/posts/search?searchQuery=${searchForm}`)
export const getPostsByUserAxios = (id) => publicRequest.get(`/posts/${id}`);

export const createPostAxios = (newPost) => userRequest.post('/posts', newPost);
export const likePostAxios = (op) => userRequest.patch(`/posts/${op}/like`);
export const updatePostAxios = (updatedPost, id) => userRequest.patch(`/posts/${id}`, updatedPost);
export const commentPostAxios = (comment, id) => userRequest.patch(`/posts/${id}/comment`, { comment })
export const deletePostAxios = (id) => userRequest.delete(`/posts/${id}`);

