import express = require('express');
import path = require('path');
import { executeSingleQuery } from '../mysql/mysql';

const app:express.Application = express();
const publicPath = path.resolve(__dirname, '../public');

app.use(express.static(publicPath));


app.get('/', (req, res) => {
    const query:string = 'SELECT * FROM heroess';
    console.log(query);
    executeSingleQuery(query, (err:any, results: Object[]) => {
        if (err) {
            res.status(400).json({
                error: err
            });
        }

        res.status(200).json({
            heroes:results
        });
    });


});

app.listen(3000, () =>{
    console.log('You are listening port number 3000');
});