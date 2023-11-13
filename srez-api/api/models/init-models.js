var DataTypes = require("sequelize").DataTypes;
var _orders = require("./orders");
var _orders_services = require("./orders_services");
var _services = require("./services");
var _sessions = require("./sessions");
var _users = require("./users");

function initModels(sequelize) {
  var orders = _orders(sequelize, DataTypes);
  var orders_services = _orders_services(sequelize, DataTypes);
  var services = _services(sequelize, DataTypes);
  var sessions = _sessions(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  orders_services.belongsTo(orders, { as: "order", foreignKey: "order_id"});
  orders.hasMany(orders_services, { as: "orders_services", foreignKey: "order_id"});
  orders_services.belongsTo(services, { as: "service", foreignKey: "service_id"});
  services.hasMany(orders_services, { as: "orders_services", foreignKey: "service_id"});
  orders.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(orders, { as: "orders", foreignKey: "user_id"});
  sessions.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(sessions, { as: "sessions", foreignKey: "user_id"});

  return {
    orders,
    orders_services,
    services,
    sessions,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
