const { Model, DataTypes } = require('sequelize');

class Product extends Model {
    static init(sequelize){
        super.init({
            id: DataTypes.INTEGER,
            name: DataTypes.STRING,
            quantity: DataTypes.INTEGER,
        }, {
            sequelize
        });
    }
}

module.exports = Product;