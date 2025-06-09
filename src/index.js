const { DEFAULT_CONFIG } = require('./constants');
const { createConfig, generatePassword } = require('./utils');
const { encrypt, decrypt } = require('./cryptoCore');

// Export functional API
module.exports = {
  encrypt: (text, password, configOverrides) => encrypt(text, password, createConfig(DEFAULT_CONFIG, configOverrides)),
  decrypt: (guedesText, password, configOverrides) => decrypt(guedesText, password, createConfig(DEFAULT_CONFIG, configOverrides)),
  generatePassword,
  createConfig,
  DEFAULT_CONFIG
};
