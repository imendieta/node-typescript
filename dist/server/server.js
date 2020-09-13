"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const mysql_1 = require("../mysql/mysql");
const app = express();
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));
app.get('/', (req, res) => {
    const query = 'SELECT * FROM heroess';
    console.log(query);
    mysql_1.executeSingleQuery(query, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            });
        }
        res.status(200).json({
            heroes: results
        });
    });
});
app.listen(3000, () => {
    console.log('You are listening port number 3000');
});
