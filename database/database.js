const mongoose = require('mongoose');

// const uri = 'mongodb://localhost/girias // PARA CONECTAR NO LOCALHOST
const uri = 'mongodb+srv://unipnosql:unipmongodb@cluster0-1jtkx.mongodb.net/girias_de_tiozao?retryWrites=true&w=majority';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;
