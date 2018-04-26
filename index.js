let express = require('express');
let app = express();

//loading body-parser, to read in data from POST requests
let bodyParser = require('body-parser');

//loading our routers to different pages
let mainRouter= require("./mainRoutes.js");
let todoRouter= require("./todoRoutes.js");

//tell 'express' to use bodyParser for JSON and URL encoded form bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//mounting our routers
app.use('/', mainRouter);
app.use('/todo', todoRouter);

app.listen(process.env.PORT || 3000);
console.log("Express server running on port 3000");
