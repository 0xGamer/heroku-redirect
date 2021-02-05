var express = require('express');
var app = express();

var newBaseURL = process.env.NEW_BASE_URL || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
var redirectStatus = parseInt(process.env.REDIRECT_STATUS || 302);
var port = process.env.PORT || 5000;

app.get('*', function(request, response) {
  response.redirect(redirectStatus, newBaseURL + request.url);
});

app.listen(port, function() {
  console.log("Listening on " + port);
});
