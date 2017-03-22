
var db = function(sequelize, DataTypes) {
    return {
        orders: sequelize.import("./order"),
        users: sequelize.import("./user")
    }
};

module.exports = db;