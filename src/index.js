import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

import { MetamaskProvider } from "./context/metamask";

ReactDOM.render(
  <React.StrictMode>
    <MetamaskProvider>
      <Provider store={store}>
        <App />
      </Provider>,
    </MetamaskProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
