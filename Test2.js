node
// alias for require('nano')('http://localhost:5984').use('test');
var db      = require('nano')('http://localhost:5984/test');
var request = require('request');

// {} for empty body as parameter is required but will be piped in
request.get("http://nodejs.org/logo.png").pipe(
  db.attachment.insert("new", "logo.png", null, "image/png")
);

var express = require('express')
  , nano    = require('nano')('http://localhost:5984')
  , app     = module.exports = express.createServer()
  , db_name = "escuela"
  , db      = nano.use(db_name);

app.get("/", function(request,response) {
  db.attachment.get("new", "logo.png").pipe(response);
});

app.listen(3333);