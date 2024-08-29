/* eslint-disable */
export default {
  displayName: 'shared-ui',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/next/babel'] }],
  },
  //ignore any code in src/shadcn


  //testPathIgnorePatterns: ['./src/shadcn'],
  moduleNameMapper:{

},
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/shared-ui',
};
