const Giria = require('../models/giriasModel');

module.exports = app => {
    
    app.get('/', (req, res) => {
        res.status(200).json({"message": "Api funcionando na porta 3000."});
    });

    app.get('/girias', async (req, res) => {
        try {
            const girias = await Giria.find();
            res.status(200).json(girias);
        } catch {
            res.status(500).json({"message": "Ocorreu um erro"});
        }
    });

    app.get('/girias/:nome/:giria', async (req, res) => {
        try {
            const nome = req.params.nome;
            const giria = req.params.giria;
            const girias = await Giria.find({"giria": giria, "nome": nome});
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
            const giria = req.body.giria;
            const nome = req.body.nome;
            const giria_new = req.body.giria_new;
            const nome_new = req.body.nome_new;
            const giria_ret = await Giria.updateOne({"giria": giria, "nome": nome}, {"giria": giria_new, "nome": nome_new});
            res.status(200).json(giria_ret);
        } catch {
            res.status(500).json({"message": "Ocorreu um erro"});
        }
    });

    app.delete('/girias', async (req, res) => {
        try {
            const giria_name = req.body.name;
            const nome = req.body.nome;
            const giria = await Giria.deleteOne({"giria": giria_name, "nome": nome});
            res.status(200).json(giria);
        } catch {
            res.status(500).json({"message": "Ocorreu um erro"});
        }
    });

}
