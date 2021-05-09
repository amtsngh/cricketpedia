var crypto = require('crypto');

function encode(UTM) {
    var md5sum = crypto.createHash('md5');
    md5sum.update(UTM);
    var hash = md5sum.digest('hex');
    return hash;
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