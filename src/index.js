import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { MetamaskProvider } from "./metamask";

ReactDOM.render(
  <React.StrictMode>
    <MetamaskProvider>
      <App />
    </MetamaskProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
