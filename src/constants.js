const DEFAULT_WORD_LIST = [
  "guedes", "Guedes", "GUEDES", "gUeDeS",
  "guedes!", "guedes?", "guedes!!", "guedes!!!",
  "guedes_is_the_best", "guedes_great_guy", "guedes_ganda_gajo", "guedes_best_guy",
  "guedes_very_good", "very_nice_guedes", "guedes_tuga_molly", "guedes_molly_tuga"
];

const DEFAULT_CONFIG = {
  algorithm: 'aes-256-cbc',
  saltLength: 16,
  ivLength: 16,
  iterations: 100000,
  keyLength: 32,
  wordList: DEFAULT_WORD_LIST
};

module.exports = {
  DEFAULT_CONFIG
};
