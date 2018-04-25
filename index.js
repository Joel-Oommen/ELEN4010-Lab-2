let path = require('path');
let express = require('express');
let dirpath = require('path')
let app = express();
let mainRouter= require('./mainRoutes.js')


app.use('/', mainRouter);

app.listen(3000);
console.log("Express server running on port 3000");
