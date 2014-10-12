'use strict';

var app = require('../app'),
    taxService = require('./taxService'),
    taxData = require('./taxData'),
    graph = require('./graph'),
    screenService = require('./screenService'),
    cache = require('./cache');

app.service('taxService', ['_', taxService])
  .service('taxData', ['$http', '$q', '$filter', 'TAX_API', taxData])
  .service('graph', ['d3', '_', 'screenService', graph])
  .service('screenService', ['$window', screenService])
  .service('cache', cache);