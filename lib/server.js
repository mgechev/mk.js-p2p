/* global require, exports, __dirname, console */

'use strict';

var express = require('express'),
    server = express(),
    PeerServer  = require('peer').PeerServer;

server.use(express.static(__dirname + '/../public'));

exports.listen = function (config) {
  new PeerServer({ port: config.p2pPort, path: '/peerjs' });
  server.listen(config.httpPort);
  console.log('HTTP server on:', config.httpPort,
    ', peerjs server on:', config.p2pPort);
};

