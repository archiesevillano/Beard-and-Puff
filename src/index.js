import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Authenticator from './authenticator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Authenticator>
      <App />
    </Authenticator>
  </React.StrictMode>
);