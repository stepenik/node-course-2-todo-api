var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://crosite:crosite123@ds255958.mlab.com:55958/mongo-udemy')

module.exports = {mongoose};
