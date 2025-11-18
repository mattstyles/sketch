// module.exports = {
//   // transform: {
//   //   '^.+\\.(t|j)sx?$': ['tsup'],
//   // },
//   preset: 'ts-jest',
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   coveragePathIgnorePatterns: ['/node_modules/', '/lib/'],
//   roots: ['<rootDir>/src'],
//   injectGlobals: true,
//   // testEnvironment: 'jsdom',
//   watchman: false,
// }

const config = require('jest-config')
module.exports = {
  ...config,
  injectGlobals: true
}