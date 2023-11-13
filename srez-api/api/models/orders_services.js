const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders_services', {
    orders_services_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orders',
        key: 'order_id'
      }
    },
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'services',
        key: 'service_id'
      }
    }
  }, {
    sequelize,
    tableName: 'orders_services',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "orders_services_pkey",
        unique: true,
        fields: [
          { name: "orders_services_id" },
        ]
      },
    ]
  });
};
