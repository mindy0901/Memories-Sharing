import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './scss/index.scss';
import { persistor, store } from './redux/store';


ReactDOM.render(
      <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                  <HashRouter>
                        <App />
                  </HashRouter>
            </PersistGate>
      </Provider>,
      document.getElementById('root')
);