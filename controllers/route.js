var path = require('path'),
    bodyParser = require('body-parser'),
    express = require('express');

module.exports = function (app) {
        var server = app.drivers.express.server;

        server.use(bodyParser.json()); // to support JSON-encoded bodies
        server.use(bodyParser.urlencoded({ // to support URL-encoded bodies
            extended: true
        }));

        server.use('/asset', express.static(__dirname + '/../views/asset'));
        server.use('/images', express.static(__dirname + '/../views/images'));
        server.use('/js', express.static(__dirname + '/../views/js'));