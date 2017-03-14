var app = {};

app.drivers = {};
app.drivers.express = require('./drivers/express');
app.drivers.mysql = require('./drivers/mysql');
app.drivers.express.init();

app.controllers = {};

app.models = {};