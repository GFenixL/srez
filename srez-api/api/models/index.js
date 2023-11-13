const {initModels} = require("./init-models");
const {Sequelize} = require("sequelize");


module.exports = initModels(new Sequelize (
    process.env.NAME, //НАЗВАНИЕ БД
    process.env.LOGIN, //Пользователь
    process.env.PASSWORD, //Пароль
    {
        dialect: 'postgres',
        host: process.env.SERVER,
        port: process.env.PORT,
        define: {
            timestamps: false,
            freezeTableName: true,
        }
    }
))