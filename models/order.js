var order = function(sequelize, DataTypes) {
  return sequelize.define("order", {
    user_id: DataTypes.INTEGER,
    content: DataTypes.STRING
  });
};

module.exports = order;