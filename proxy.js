const corsProxy = require('cors-anywhere');

const host = '0.0.0.0';
const port = 8081;

corsProxy
  .createServer({
    originWhiteList: [],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
  })
  .listen(port, host, () => {
    'use strict';
    console.log(`Running cors anywhere on ${host} : ${port}`);
  });
