const mongoose = require('mongoose');

const uri = 'mongodb://localhost/girias_de_tiozao';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;