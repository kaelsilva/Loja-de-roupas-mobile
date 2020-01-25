const { Model, DataTypes } = require('sequelize');

class Customer extends Model {
    static init(sequelize){
        super.init({
            cpf: DataTypes.STRING,
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            birthday: DataTypes.TIME,
        }, {
            sequelize
        });
    }
}

module.exports = Customer;