const bs58 = require('bs58')

function encode(num) {
    console.log("num",num)
    let encoded = '';
    const bytes = Buffer.from(JSON.stringify(num),'hex')
    encoded = bs58.encode(bytes)
    return encoded;
}

function decode(str) {
  let decoded = 0;
  while (str) {
    const index = alphabet.indexOf(str[0]);
    const power = str.length - 1;
    decoded += index * (base ** power);
    str = str.substring(1);
  }
  return decoded;
}

module.exports.encode = encode;
module.exports.decode = decode;