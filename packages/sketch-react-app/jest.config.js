module.exports = {
  // transform: {
  //   '^.+\\.(t|j)sx?$': ['tsup'],
  // },
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coveragePathIgnorePatterns: ['/node_modules/', '/lib/'],
  roots: ['<rootDir>/src'],
  injectGlobals: false,
  // testEnvironment: 'jsdom',
  watchman: false,
}
