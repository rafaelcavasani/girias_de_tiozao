const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');

module.exports = () => {
    app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    consign()
        .include('controllers')
        .into(app);
    return app;
}




