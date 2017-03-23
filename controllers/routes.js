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

    console.log(__dirname);

    server.get('/', function (req, res) {
        res.sendFile(path.resolve('views/LaCarte.html'));
    });

    server.post('/api/cocktail', function (req, res) {
        var cocktail = new app.models.cocktail(app, {
            name: req.body.name,
            ingredient: req.body.ingredient
        });

        cocktail.register(function (rows) {
            res.send(rows);
        });
    });

    server.get('/api/cocktail', function (req, res) {
        var cocktail = new app.models.cocktail(app, {
            id: req.query.id
        });
        cocktail.get(function (rows) {
            res.send(rows);
        });
    });

    server.get('/api/lacarte', function (req, res) {
        var lacarte = new app.models.lacarte(app, {
            id: req.query.id
        });
        lacarte.get(function (rows) {
            res.send(rows);
        });
    });
}