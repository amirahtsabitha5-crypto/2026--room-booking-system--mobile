const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const config = {
  project: {
    projectRoot: __dirname,
  },
  resolver: {
    sourceExts: ['ts', 'tsx', 'js', 'jsx', 'json', 'mjs'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
