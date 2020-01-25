const Customer = require('../models/Customer');

module.exports = {
    async index(req, res){
        const customers = await Customer.findAll();

        return res.json(customers);
    },

    async show(req, res){
        const customer = await Customer.findByPk(req.params.id);

        return res.json(customer);
    },

    async store(req, res){
        const { cpf, name, email, birthday } = req.body;

        const customer = await Customer.create( { cpf, name, email, birthday } );

        return res.json(customer);
    },

    async destroy(req, res){
        Customer.destroy({
            where: {
                id: req.params.id,
            }
        });

        return res.json({});
    },

    async update(req, res){
        const { cpf, name, email, birthday } = req.body;

        const customer = await Customer.update({ 
            cpf, name, email, birthday }, {
                where: {
                    id: req.params.id,
                },
            });

        return res.json(customer);
    }
}