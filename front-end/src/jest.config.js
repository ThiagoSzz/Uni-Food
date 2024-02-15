module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', './setupTests.ts'],
  transformIgnorePatterns: ['node_modules/(?!(@ui5|lit-html)).*\\.js$']
};
