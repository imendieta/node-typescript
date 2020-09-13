"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeSingleQuery = void 0;
const mysql = require("mysql");
const dbConnection_1 = require("../dbConnection");
exports.executeSingleQuery = (query, callBack) => {
    const connection = mysql.createConnection(dbConnection_1.DB_CONNECTION_DETAILS);
    connection.query(query, (err, result) => {
        if (err) {
            console.log(err);
            callBack(err);
        }
        if (result.length === 0) {
            callBack('NO RESULTS');
        }
        callBack(null, result);
        console.log('Connected!');
    });
};
