const { Model, DataTypes } = require('sequelize');

class Provider extends Model {
    static init(sequelize){
        super.init({
            cnpj: DataTypes.STRING,
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            address: DataTypes.STRING,
        }, {
            sequelize
        });
    }
}

module.exports = Provider;