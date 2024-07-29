// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: 'postgres',
//   logging: false,
// });

// module.exports = sequelize;
const {Sequelize} = require('sequelize')
const sequelize=new Sequelize('server','postgres','qwert@123',{
        host: 'localhost',
        dialect: 'postgres',
        logging: console.log 
      });
module.exports=sequelize;

