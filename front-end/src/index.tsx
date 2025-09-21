import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { setLanguage } from '@ui5/webcomponents-base/dist/config/Language';
import { initI18n } from './config/i18n';
import './utils/resizeObserverPolyfill';
import { suppressResizeObserverErrors } from './utils/suppressResizeObserverErrors';

suppressResizeObserverErrors();

const resizeObserverErrorHandler = (e: ErrorEvent) => {
  const message = e.message || e.error?.message || '';
  if (
    typeof message === 'string' &&
    message.includes('ResizeObserver loop completed with undelivered notifications')
  ) {
    const resizeObserverErr = document.getElementById('webpack-dev-server-client-overlay-div');
    if (resizeObserverErr) {
      resizeObserverErr.setAttribute('style', 'display: none');
    }
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
};

window.addEventListener('error', resizeObserverErrorHandler);

window.addEventListener('unhandledrejection', (e) => {
  const reason = e.reason;
  const message = reason?.message || reason?.toString?.() || '';
  if (typeof message === 'string' && message.includes('ResizeObserver loop')) {
    e.preventDefault();
  }
});

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
