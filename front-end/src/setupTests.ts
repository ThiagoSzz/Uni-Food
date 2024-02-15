import '@testing-library/jest-dom';
import ResizeObserverPolyfill from 'resize-observer-polyfill';

beforeEach(() => {
  window.ResizeObserver = ResizeObserverPolyfill;
  
  window.IntersectionObserver = class IntersectionObserverMock {
    constructor(
      public callback: IntersectionObserverCallback,
      public options: IntersectionObserverInit
    ) {}
    observe() {}
    unobserve() {}
    disconnect() {}
  } as any;
});