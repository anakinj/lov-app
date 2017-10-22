import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    (
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    ), document.getElementById('mount'),
  );
});
