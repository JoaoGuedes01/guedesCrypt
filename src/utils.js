const crypto = require('crypto');

// Derive key from password and salt
const getKey = (password, salt, { iterations, keyLength }) =>
  crypto.pbkdf2Sync(password, salt, iterations, keyLength, 'sha512');

// Random password generator
const generatePassword = (prefix = 'guedes') =>
  `${prefix}_${crypto.randomBytes(8).toString('hex')}`;

// Merge user config with default
const createConfig = (defaults, overrides = {}) => {
  const config = { ...defaults, ...overrides };
  if (!Array.isArray(config.wordList) || config.wordList.length !== 16) {
    throw new Error('Config error: "wordList" must contain exactly 16 unique values.');
  }
  return config;
};

module.exports = {
  getKey,
  generatePassword,
  createConfig
};

