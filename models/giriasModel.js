const mongoose = require('../database/database');

const Schema = mongoose.Schema;
const GiriaSchema = Schema({
    nome : {
        type: String
    },
    giria : {
        type: String
    }
});

const Giria = mongoose.model('girias', GiriaSchema);
module.exports = Giria;
