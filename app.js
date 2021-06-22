const express = require('express');

//express app
const app = express();

//listen for requests
app.listen(4000);

app.get('/', (req,res) =>{
    res.send('<p>home page</p>');

});