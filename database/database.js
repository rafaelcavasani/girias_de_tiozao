const mongoose = require('mongoose');

const uri = 'mongodb+srv://unipnosql:unipmongodb@cluster0-1jtkx.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;
