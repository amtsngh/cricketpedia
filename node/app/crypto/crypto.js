var crypto = require('crypto');

function encode(UTM) {
    var md5sum = crypto.createHash('md5');
    md5sum.update(UTM);
    var hash = md5sum.digest('hex');
    return hash;
}

module.exports.encode = encode;