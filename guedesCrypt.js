const guedesEncrypt = (salt, str) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);

    let res = str.split("").map(textToChars).map(applySaltToChar).map(byteHex).join("");
    return res;
}

const guedesDecrypt = (salt, encryptedStr) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);

    let res = encryptedStr.match(/.{1,2}/g).map((hex) => parseInt(hex, 16)).map(applySaltToChar).map((charCode) => String.fromCharCode(charCode)).join("");
    return res;
}

let string = "This is the string I want to encrypt"
let salt = "THIS IS MY SECRET SALT"

console.log(guedesDecrypt(salt,guedesEncrypt(salt,string)))

module.exports = {
    guedesEncrypt: guedesEncrypt,
    guedesDecrypt: guedesDecrypt
}