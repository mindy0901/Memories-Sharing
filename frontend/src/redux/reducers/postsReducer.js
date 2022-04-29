import { COMMENT, CREATE, DELETE, END_LOADING, FETCH_ALL, FETCH_BY_SEARCH, FETCH_POST, LIKE, START_LOADING, UPDATE } from "../constantsType/actionType";

const initialState = {
      posts: [],
      isLoading: true,
}

const postsReducer = (state = initialState, action) => {
      switch (action.type) {
            case FETCH_ALL:
                  return {
                        ...state,
                        posts: action.payload
                  };
            case FETCH_BY_SEARCH:
                  return { ...state, posts: action.payload };
            case FETCH_POST:
                  return { ...state, post: action.payload };
            case CREATE:
                  return { ...state, posts: [action.payload, ...state.posts,] };
            case UPDATE:
                  return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
            case LIKE:
                  return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
            case COMMENT:
                  return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)), };
            case DELETE:
                  return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
            case START_LOADING:
                  return { ...state, isLoading: true };
            case END_LOADING:
                  return { ...state, isLoading: false };

            default:
                  return state;
      }
};

export default postsReducer;
