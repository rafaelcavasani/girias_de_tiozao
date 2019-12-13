const Giria = require('../models/giriasModel');

module.exports = app => {

    app.get('/girias', async (req, res) => {
        try {
            const girias = await Giria.find();
            res.status(200).json(girias);
        } catch {
            res.status(500).json({"message": "Ocorreu um erro"});
        }
    });

    app.get('/girias/:giria', async (req, res) => {
        try {
            const giria = req.params.giria;
            const girias = await Giria.find({"giria": giria});
            res.status(200).json(girias);
        } catch {
            res.status(500).json({"message": "Ocorreu um erro"});
        }
    });

    app.post('/girias', async (req, res) => {
        try {
            const giria = await Giria.create(req.body);
            res.status(200).json(giria);
        } catch {
            res.status(500).json({"message": "Ocorreu um erro"});
        }
    });

    app.put('/girias', async (req, res) => {
        try {
            const giria_name = req.body.name;
            const giria_new_name = req.body.new_name;
            const giria = await Giria.updateOne({"giria": giria_name}, {"giria": giria_new_name});
            res.status(200).json(giria);
        } catch {
            res.status(500).json({"message": "Ocorreu um erro"});
        }
    });

    app.delete('/girias', async (req, res) => {
        try {
            const giria_name = req.body.name;
            const giria = await Giria.deleteOne({"giria": giria_name});
            res.status(200).json(giria);
        } catch {
            res.status(500).json({"message": "Ocorreu um erro"});
        }
    });

}