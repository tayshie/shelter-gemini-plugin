module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  // Mock shelter module
  moduleNameMapper: {
    '^@shelter/(.*)$': '<rootDir>/src/__mocks__/shelter.js',
  },
};
