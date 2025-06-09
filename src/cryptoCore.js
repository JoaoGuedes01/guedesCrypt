const crypto = require('crypto');
const { getKey } = require('./utils');
const { encodeHexToWords, decodeWordsToHex } = require('./encoder');

const encrypt = (text, password, config) => {
  const salt = crypto.randomBytes(config.saltLength);
  const iv = crypto.randomBytes(config.ivLength);
  const key = getKey(password, salt, config);

  const cipher = crypto.createCipheriv(config.algorithm, key, iv);
  const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
  const full = Buffer.concat([salt, iv, encrypted]);

  return encodeHexToWords(full.toString('hex'), config.wordList);
};

const decrypt = (guedesText, password, config) => {
  const hex = decodeWordsToHex(guedesText, config.wordList);
  const full = Buffer.from(hex, 'hex');

  const { saltLength, ivLength } = config;
  if (full.length < saltLength + ivLength)
    throw new Error('Invalid ciphertext: too short');

  const salt = full.subarray(0, saltLength);
  const iv = full.subarray(saltLength, saltLength + ivLength);
  const encrypted = full.subarray(saltLength + ivLength);

  const key = getKey(password, salt, config);
  const decipher = crypto.createDecipheriv(config.algorithm, key, iv);

  return Buffer.concat([decipher.update(encrypted), decipher.final()]).toString('utf8');
};

module.exports = {
  encrypt,
  decrypt
};

