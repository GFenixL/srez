const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('services', {
    service_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    service_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    service_cost: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'services',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "services_pkey",
        unique: true,
        fields: [
          { name: "service_id" },
        ]
      },
    ]
  });
};
