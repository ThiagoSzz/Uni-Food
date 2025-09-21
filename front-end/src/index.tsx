import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { setLanguage } from '@ui5/webcomponents-base/dist/config/Language';
import { initI18n } from './config/i18n';

// Set UI5 Web Components to Portuguese
setLanguage('pt-BR');

initI18n()
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  })
  .catch((err) => {
    console.error('i18n init failed', err);
    // Fallback: render app anyway
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  });
