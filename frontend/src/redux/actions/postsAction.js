import { commentPostAxios, createPostAxios, deletePostAxios, getPostAxios, getPostsAxios, getPostsBySearchAxios, likePostAxios, updatePostAxios } from "../../api";
import { COMMENT, CREATE, DELETE, END_LOADING, FETCH_ALL, FETCH_BY_SEARCH, FETCH_POST, LIKE, START_LOADING, UPDATE } from "../constantsType/actionType";

export const getPosts = () => async (dispatch) => {
      try {
            dispatch({ type: START_LOADING });
            const res = await getPostsAxios();
            dispatch({ type: FETCH_ALL, payload: res.data })
            dispatch({ type: END_LOADING });
      } catch (error) {
            console.log(error);
      }
}

export const getPost = (id) => async (dispatch) => {
      try {
            dispatch({ type: START_LOADING });
            const res = await getPostAxios(id);
            dispatch({ type: FETCH_POST, payload: res.data })
            dispatch({ type: END_LOADING });

      } catch (error) {
            console.log(error);
      }
}

export const getPostsBySearch = (searchForm) => async (dispatch) => {
      try {
            dispatch({ type: START_LOADING });
            const res = await getPostsBySearchAxios(searchForm);
            dispatch({ type: FETCH_BY_SEARCH, payload: res.data })
            dispatch({ type: END_LOADING });
      } catch (error) {
            console.log(error);
      }
}

export const createPost = (postData) => async (dispatch) => {
      try {
            dispatch({ type: START_LOADING });
            const res = await createPostAxios(postData);
            dispatch({ type: CREATE, payload: res.data })
            dispatch({ type: END_LOADING });
      } catch (error) {
            console.log(error);
      }
};

export const updatePost = (postData, currentId) => async (dispatch) => {
      try {
            dispatch({ type: START_LOADING });
            const res = await updatePostAxios(postData, currentId);
            dispatch({ type: UPDATE, payload: res.data })
            dispatch({ type: END_LOADING });
      } catch (error) {
            console.log(error);
      }
};

export const likePost = (id) => async (dispatch) => {
      try {
            const res = await likePostAxios(id);
            dispatch({ type: LIKE, payload: res.data })
      } catch (error) {
            console.log(error);
      }
}

export const deletePost = (currentId) => async (dispatch) => {
      try {
            await deletePostAxios(currentId);
            dispatch({ type: DELETE, payload: currentId })
      } catch (error) {
            console.log(error)
      }
}

export const commentPost = (comment, id) => async (dispatch) => {
      try {
            const res = await commentPostAxios(comment, id)
            dispatch({ type: COMMENT, payload: res.data })
            return res.data.comments
      } catch (error) {
            console.log(error)
      }
}

