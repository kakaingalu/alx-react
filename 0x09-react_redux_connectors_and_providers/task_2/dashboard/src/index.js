import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import uiReducer, { initialState } from './reducers/uiReducer';
import App from './App/App';
import { Map } from 'immutable';
import thunk from 'redux-thunk';

const rootElement = document.getElementById('root');

const store = createStore(uiReducer, Map(initialState), applyMiddleware(thunk));
createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

export default store;
