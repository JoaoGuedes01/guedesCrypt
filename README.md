
# 🛡️ guedes-crypto

> 🔐 AES-256 encryption based on Guedes Cypher

**guedes-crypto** is a Node.js library that encrypts and decrypts data using AES-256-CBC, encoding the result using a fixed vocabulary of "Guedes" words instead of typical base64 or hex.

Ideal for obfultscation, novey, or just showing off your love for all things Guedes.

---

## ✨ Features

- 🔐 AES-256-CBC encryption
- 🎭 Custom “Guedes vocabulary” ciphertext encoding
- 🔁 Functional API with customizable configuration
- ⚙️ Customizable encryption parameters
- 📦 Lightweight and dependency-free (except for `crypto`)

---

## 📦 Installation

```bash
npm install guedes-crypto
```
## 🧪 Usage
```js
import { encrypt, decrypt, generatePassword} from 'guedes-crypt';

// Basic usage
const password = generatePassword();
const secret = 'Top secret message';

const encrypted = encrypt(secret, password);
console.log(encrypted); // guedes words...

const decrypted = decrypt(encrypted, password);
console.log(decrypted); // "Top secret message"

```
## 🧠 Advanced Configuration
```js
import { encrypt, decrypt, createCrypto} from 'guedes-crypt';
const customCrypto = createCrypto({
  algorithm: 'aes-256-cbc',
  saltLength: 16,
  ivLength: 16,
  iterations: 100000,
  keyLength: 32,
  guedesWords: [
    "guedes", "Guedes", "GUEDES", "gUeDeS",
    "guedes!", "guedes?", "guedes.", "guedes!!",
    "guedes_is_the_best", "guedes_great_guy", "guedes_ganda_gajo", "guedes_best_man",
    "guedes_very_good", "very_nice_guedes", "guedes_tuga_molly", "guedes_molly_tuga"
  ]
});

const encrypted = customCrypto.encrypt('Hello world', 'custom_password');
const decrypted = customCrypto.decrypt(encrypted, 'custom_password');
```
## 🧪 Testing
```bash
npm run test
```
## 🧰 API Reference
**encrypt(plaintext, password)**
Encrypts the string using the default configuration and returns Guedes-encoded ciphertext.

**decrypt(ciphertext, password)**
Decrypts Guedes-encoded ciphertext using the same password.

**generatePassword()**
Generates a random, strong password prefixed with guedes_.

**createCrypto(config)**
Returns a new encrypt, decrypt, and generatePassword function with custom configuration.

## 📜 License
MIT © You can do whatever the fuck xD
## 💡 Why?
Why not?
