import '@testing-library/jest-dom';
import ResizeObserverPolyfill from 'resize-observer-polyfill';

beforeEach(() => {
  window.ResizeObserver = ResizeObserverPolyfill;
});
