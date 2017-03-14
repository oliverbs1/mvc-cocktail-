var express = require("express"),
    mysql = require("./mysql");

module.exports = {
    server: null,

    init: function () {
        var app = express();

        app.listen(6001, function () {
            console.log('listening on *:6001');
        });

        this.server = app;

    }
}