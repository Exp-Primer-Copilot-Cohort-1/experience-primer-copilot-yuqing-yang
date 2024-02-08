// Create web server
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
var comments = [];

app.use(bodyParser.json());

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  var comment = req.body;
  comments.push(comment);
  res.json(comment);
});

app.listen(port, function() {
  console.log('Server is running on port', port);
});
```

## 3.6.2. Testing with Postman

###