import express = require('express');


const app:express.Application = express();

app.listen(3000, () =>{
    console.log('You are listening port number 3000');
});