import mysql = require('mysql');
import { DB_CONNECTION_DETAILS } from '../dbConnection';



export const executeSingleQuery = (query:string, callBack:Function) => {
    const connection:mysql.Connection = mysql.createConnection(DB_CONNECTION_DETAILS);
    connection.query(query, (err, result:Object[]) => {

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
