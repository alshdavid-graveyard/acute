const esModules = [
  '@acuteui/compiler',
  '@acuteui/core',
  '@acuteui/platform',
]

module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  testRegex: '.*\\.spec\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@acuteui/compiler(.*)$': '<rootDir>/../packages/core/src/lib/$1',
    '^@acuteui/core(.*)$': '<rootDir>/../packages/core/src/lib/$1',
    '^@acuteui/platform(.*)$': '<rootDir>/../packages/core/src/lib/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transformIgnorePatterns: [
    `<rootDir>/node_modules/(?!${esModules.join('|')})`,
  ]
};