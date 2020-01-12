const User = require('../models/User');

module.exports = {
    async index(req, res){
        const users = await User.findAll();

        return res.json(users);
    },

    async show(req, res){
        const user = await User.findByPk(req.params.id);

        return res.json(user);
    },

    async store(req, res){
        const { name, email, password } = req.body;
        const user = await User.create( { name, email, password });
        return res.json(user);
    },

    async destroy(req, res){
        User.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.json();
    },

    async update(req, res){
        const { name, email, password } = req.body;
        
        const user = await User.update({
            name, email, password },
            { where: {
                id: req.params.id,
            }
        });

        return res.json(user);
    }
};