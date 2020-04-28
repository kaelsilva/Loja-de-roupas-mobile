const Product = require('../models/Product');

module.exports = {
    async index(req, res){
        const products = await Product.findAll();

        return res.json(products);
    },

    async show(req, res){
        const products = await Product.findByPk(req.params.id);

        return res.json(products);
    },

    async store(req, res){
        const { name, quantity } = req.body;

        const product = await Product.create( { name, quantity } );

        return res.json(product);
    },

    async destroy(req, res){
        Product.destroy({
            where: {
                id: req.params.id,
            }
        });

        return res.json({});
    },

    async update(req, res){
        const { name, quantity } = req.body;

        const product = await Product.update({ 
            name, quantity }, {
                where: {
                    id: req.params.id,
                },
            });

        return res.json(product);
    }
}