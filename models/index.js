const {Sequelize, DataTypes, QueryTypes } = require("sequelize");

const dbUsers = require("./auth/users.js")

const seq = new Sequelize(
    'iktprojekt',
    'root',
    '',
    {
        host: "localhost",
        dialect: "mysql"
    }
)


const db = {};
db.Sequelize = Sequelize;
db.seq = seq;
db.QueryTypes = QueryTypes;

db.Auth = {};

db.Auth.User = dbUsers(seq, Sequelize, DataTypes)


//module.exports = checkDB()
module.exports = db;
