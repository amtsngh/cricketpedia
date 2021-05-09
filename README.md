# cricketpedia

Requirement
1. Node JS
2. Mysql should already be running at port 3306 or you can configure the port in code (/node/app/sequelize/sequelize.js)
3. An existing Database named "cricketpedia" 

Steps to execute.

1. clone the repo
2. cd /node
3. execute "npm install"
4. now run "node server.js"

How to Test
use postman "POST" method

Point to http://localhost:3000/api/shorten

Header:
Content-Type ----- application/json

Body:

{
  "url": "https://www.lilachbullock.com/?utm_source=facebook&utm_medium=social&utm_campaign=sale"
}


expected response should be:
{
    "shortUrl": "http://localhost:3000/SomeHashedText",
    "utmSource": "facebook",
    "utmMedium": "social",
    "utmCampaign": "sale"
}

You'll be redirected to the main url once you click "http://localhost:3000/SomeHashedText"
