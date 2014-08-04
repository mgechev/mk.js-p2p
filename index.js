/* global require */

'use strict';

var server = require('./lib/server.js');

server.listen({
  httpPort: 3001,
  p2pPort: 5000
});