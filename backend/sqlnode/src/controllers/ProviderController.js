const Provider = require('../models/Provider');

module.exports = {
    async index(req, res){
        const providers = await Provider.findAll();

        return res.json(providers);
    },

    async show(req, res){
        const provider = await Provider.findByPk(req.params.id);

        return res.json(provider);
    },

    async store(req, res){
        const { cnpj, name, email, phone, address } = req.body;

        const provider = await Provider.create( { cnpj, name, email, phone, address } );

        return res.json(provider);
    },

    async destroy(req, res){
        Provider.destroy({
            where: {
                id: req.params.id,
            }
        });

        return res.json({});
    },

    async update(req, res){
        const { cnpj, name, email, phone, address } = req.body;

        const provider = await Provider.update({
          cnpj, name, email, phone, address }, {
                where: {
                    id: req.params.id,
                },
            });

        return res.json(provider);
    }
}