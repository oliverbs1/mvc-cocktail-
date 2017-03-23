module.exports = function (app, data) {
    var mysql = app.drivers.mysql;
    this.table = 'lacarte';

    this.id = data.id || null;
    this.cocktail = data.cocktail || null;
    this.ingredient = data.ingredient || null;
    this.price = data.price || null;


    this.get = function (cb) {
        var q = " SELECT * FROM " + this.table;

        mysql.query(q, function (rows) {
            cb(rows);
        });
    }

    return this;
}