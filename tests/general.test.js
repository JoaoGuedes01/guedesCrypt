const { encrypt, decrypt, generatePassword } = require('../src');

describe('Guedes Crypto Library', () => {
  const password = generatePassword();

  test('Encrypt and decrypt a small string', () => {
    const original = 'Hello, Guedes!';
    const encrypted = encrypt(original, password);
    const decrypted = decrypt(encrypted, password);
    console.log(encrypted)
    console.log(decrypted)
    expect(decrypted).toBe(original);
  });

  test('Encrypt and decrypt a large string', () => {
    const original = 'a'.repeat(100000);
    const encrypted = encrypt(original, password);
    const decrypted = decrypt(encrypted, password);
    console.log(encrypted)
    console.log(decrypted.length)
    expect(decrypted).toBe(original);
  });

  test('Encrypt and decrypt a JSON object (stringified)', () => {
    const originalObj = { message: 'Hello', from: 'Guedes', list: [1, 2, 3], nested: { x: true } };
    const original = JSON.stringify(originalObj);
    const encrypted = encrypt(original, password);
    const decrypted = decrypt(encrypted, password);
    const parsed = JSON.parse(decrypted);
    console.log(encrypted)
    console.log(parsed)
    expect(parsed).toEqual(originalObj);
  });

  test('Throws error on invalid word in ciphertext', () => {
    const invalidText = 'guedes guedes guedes NOT_A_WORD';
    expect(() => decrypt(invalidText, password)).toThrow('Invalid word in ciphertext');
  });

  test('Throws error if ciphertext is too short', () => {
    const tooShortText = 'guedes';
    expect(() => decrypt(tooShortText, password)).toThrow('Invalid ciphertext: too short');
  });
});

