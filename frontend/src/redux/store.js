import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from "./reducers";
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";

const persistConfig = {
      key: 'root',
      storage,
      blacklist: ['postsReducer'],
};

const presistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
      presistedReducer,
      composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { persistor, store };


