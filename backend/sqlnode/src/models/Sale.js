const { Model, DataTypes } = require('sequelize');

class Sale extends Model {
    static init(sequelize){
        super.init({
            total_price: DataTypes.DOUBLE,
            is_finished: DataTypes.INTEGER,
            quantity: DataTypes.INTEGER,
            product_id: DataTypes.INTEGER,
            customer_id: DataTypes.INTEGER,
        }, {
            sequelize
        });
    }
}

module.exports = Sale;