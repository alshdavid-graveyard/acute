const esModules = [
  '@acuteui/core'
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
    '^@acuteui/core(.*)$': '<rootDir>/../packages/core/src/$1',
  },
  transformIgnorePatterns: [
    `<rootDir>/node_modules/(?!${esModules.join('|')})`,
  ]
};