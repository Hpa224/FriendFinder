const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

var app = express();

const PORT = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


require("./app/routing/apiroutes.js")(app);
require("./app/routing/htmlroutes.js")(app);

app.listen(PORT, function() {
    console.log(`Server listening on: http://localhost:${PORT}`);
});

