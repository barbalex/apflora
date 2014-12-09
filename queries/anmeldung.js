/*jslint node: true, browser: true, nomen: true, todo: true */
'use strict';


var mysql              = require('mysql'),
    config             = require('../src/modules/configuration'),
    escapeStringForSql = require('./escapeStringForSql'),
    connection = mysql.createConnection({
        host:     'localhost',
        user:     config.db.userName,
        password: config.db.passWord,
        database: 'alexande_apflora'
    });

module.exports = function (request, callback) {
    var userName = decodeURIComponent(request.params.name),
        password = decodeURIComponent(request.params.pwd);
    connection.query(
        'SELECT NurLesen FROM tblUser WHERE UserName = "' + escapeStringForSql(userName) + '" AND Passwort = "' + escapeStringForSql(password) + '"',
        function (err, data) {
            if (err) { throw err; }
            callback(data);
        }
    );
};