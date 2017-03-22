var user = function(sequelize, DataTypes) {
  return sequelize.define("user", {
    username: {
      type: DataTypes.STRING, 
      field: "username"
    },
    password: {
      type: DataTypes.STRING, 
      field: "password"
    }, 
    firstName: {
      type: DataTypes.STRING, 
      field: "first_name"
    },
    description: DataTypes.TEXT
  });
};

module.exports = user;