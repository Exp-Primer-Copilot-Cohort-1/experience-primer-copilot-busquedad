// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up static file serving
app.use(express.static('public'));

// Load comments from file
var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// Get all comments
app.get('/api/comments', function(req, res) {
  res.json(comments);
});

// Create a comment
app.post('/api/comments', function(req, res) {
  var comment = {
    id: Date.now(),