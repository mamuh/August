const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open', function() {
  console.log('connection has been made');
}).on('error', function(error) {
  console.log('Connection error', error);
})