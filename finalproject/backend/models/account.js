const { DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');
const User = require('./user.js');

const Account = sequelize.define('Account', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  balance: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.00,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
}, {
  tableName: 'Accounts',
});

Account.belongsTo(User, { foreignKey: 'userId' });

module.exports = Account;
