const { Model, DataTypes } = require('sequelize');

class Product extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            quantity: DataTypes.INTEGER,
            price: DataTypes.DOUBLE,
            providers_id: DataTypes.INTEGER,
        }, {
            sequelize
        });
    }
}

module.exports = Product;