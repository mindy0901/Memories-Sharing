import { combineReducers } from "redux";

import postsReducer from "./postsReducer";
import authReducer from "./authReducer";

export const rootReducer = combineReducers({
      postsReducer,
      authReducer,
});

