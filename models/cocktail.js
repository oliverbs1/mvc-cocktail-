module.exports = function (app, data) {
    var mysql = app.drivers.mysql;
    this.table = 'cocktail';

    this.id = data.id || null;
    this.name = data.name || null;
    this.ingredient = data.ingredient || null;

    this.get = function (cb) {
        var q = "SELECT * FROM " + this.table;

        mysql.query(q, function (rows) {
            cb(rows);
        });
    }

    this.register = function (cb) {
        var me = this;
        var q = " INSERT INTO " + this.table + " ( name , ingredient) VALUES ( '" + this.name + "' , '" + this.ingredient + "' ) ";

        mysql.query(q, function (rows) {
            me.id = rows.insertId;
            cb(me);
        });
    }

    return this;
}