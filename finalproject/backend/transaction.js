
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Account = require('./account');

const Transaction = sequelize.define('Transaction', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  accountId: {
    type: DataTypes.INTEGER,
    references: {
      model: Account,
      key: 'id',
    },
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['deposit', 'withdrawal']],
    },
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isIn: [['pending', 'approved', 'rejected']],
    },
  },
}, {
  tableName: 'Transactions',
});

Transaction.belongsTo(Account, { foreignKey: 'accountId' });

module.exports = Transaction;
