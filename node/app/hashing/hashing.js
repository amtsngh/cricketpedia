const sequelize = require('../sequelize/sequelize.js');
const base58 = require('../base58/base58.js');
const urlpack = require('url');
const querystring = require('querystring');

const webhost = 'http://localhost:3000';

function shorten(req, res) {
  if (req.body.url) {
    const longUrl = req.body.url;
    sequelize.findOne({ where: { longUrl } }).then(async (url) => {
      let hash
      if (!url) {
        let parsedUrl = urlpack.parse(longUrl);
        let parsedQs = querystring.parse(parsedUrl.query);
        if (!(parsedQs.utm_source) || !(parsedQs.utm_medium) || !(parsedQs.utm_campaign)) {
          return res.status(201).json({ Error: `Please Check The URL Again.` });
        }
        let UTMData = JSON.stringify(parsedQs)
        hash = base58.encode(UTMData)
        let utmSource = parsedQs.utm_source;
        let utmMedium = parsedQs.utm_medium;
        let utmCampaign = parsedQs.utm_campaign;
        url = await sequelize.create({ hash, longUrl, utmSource, utmMedium, utmCampaign });
      }
      res.status(201).json({ shortUrl: `${webhost}/${url.hash}`, utmSource: url.utmSource, utmMedium: url.utmMedium, utmCampaign: url.utmCampaign });
    });
  }
}

function decode(req, res) {
  const hash = req.params.encodedId;
  sequelize.findOne({ where: { hash } }).then((url) => {
    if (url) {
      res.redirect(url.longUrl);
    } else {
      res.redirect(webhost);
    }
  });
}

module.exports = {
  shorten, decode,
};