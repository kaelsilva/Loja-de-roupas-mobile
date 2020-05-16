const Sale = require('../models/Sale');

module.exports = {
    async index(req, res){
        const sales = await Sale.findAll();

        return res.json(sales);
    },

    async show(req, res){
        const sales = await Sale.findByPk(req.params.id);

        return res.json(sales);
    },

    async store(req, res){
        const { total_price, is_finished, quantity, product_id, customer_id } = req.body;

        const sale = await Sale.create( { total_price, is_finished, quantity, product_id, customer_id } );

        return res.json(sale);
    },

    async destroy(req, res){
        Sale.destroy({
            where: {
                id: req.params.id,
            }
        });

        return res.json({});
    },

    async update(req, res){
        const { total_price, is_finished, quantity, product_id, customer_id } = req.body;

        const sale = await Sale.update({ 
            total_price, is_finished, quantity, product_id, customer_id }, {
                where: {
                    id: req.params.id,
                },
            });

        return res.json(sale);
    }
}