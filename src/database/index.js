const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://natan:1618@cluster0.g0scq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;