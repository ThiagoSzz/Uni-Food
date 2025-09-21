import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { setLanguage } from '@ui5/webcomponents-base/dist/config/Language';

// Set UI5 Web Components to Portuguese
setLanguage('pt-BR');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
