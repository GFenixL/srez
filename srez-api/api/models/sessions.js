const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sessions', {
    session_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    session_token: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    session_exp: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'sessions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "sessions_pkey",
        unique: true,
        fields: [
          { name: "session_id" },
        ]
      },
    ]
  });
};
