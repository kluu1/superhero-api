"use strict";
var express = require('express');
var routes = require('./routes');
var app = express();
var port = 3000;
app.use(routes);
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
