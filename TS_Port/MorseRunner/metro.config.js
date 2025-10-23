// Enable importing code from the parent workspace (e.g., ../typescript_src)
const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('metro-config').ConfigT} */
const config = getDefaultConfig(__dirname);

config.watchFolders = [path.resolve(__dirname, '..')];

module.exports = config;


