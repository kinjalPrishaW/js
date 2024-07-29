const Account = require('../models/account');
const Transaction = require('../models/transaction');

const viewBalance = async (req, res) => {
  try {
    const account = await Account.findOne({ where: { userId: req.user.id } });
    res.status(200).json({ balance: account.balance });
  } catch (error) {
    res.status(400).json({ message: 'Error fetching balance', error });
  }
};
const depositMoney = async (req, res) => {
  const { amount } = req.body;
  try {
    // Ensure amount is provided and is a number
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      return res.status(400).json({ message: 'Invalid amount' });
    }

    // Find the account
    const account = await Account.findOne({ where: { userId: req.user.id } });
    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }

    // Update the account balance
    account.balance = parseFloat(account.balance) + parseFloat(amount);
    await account.save();
    
    // Create a transaction record
    await Transaction.create({ type: 'deposit', amount, accountId: account.id });
    
    // Send success response
    res.status(200).json({ balance: account.balance });
  } catch (error) {
    console.error('Error depositing money:', error); // Log the error for debugging
    res.status(400).json({ message: 'Error depositing money', error: error.message });
  }
};

// const depositMoney = async (req, res) => {
//   const { amount } = req.body;
//   try {
//     const account = await Account.findOne({ where: { userId: req.user.id } });
//     account.balance = parseFloat(account.balance) + parseFloat(amount);
//     await account.save();
    
//     await Transaction.create({ type: 'deposit', amount, accountId: account.id });
    
//     res.status(200).json({ balance: account.balance });
//   } catch (error) {
//     res.status(400).json({ message: 'Error depositing money', error });
//   }
// };

const withdrawMoney = async (req, res) => {
  const { amount } = req.body;
  try {
    const account = await Account.findOne({ where: { userId: req.user.id } });
    if (parseFloat(amount) > parseFloat(account.balance)) {
      return res.status(400).json({ message: 'Insufficient funds' });
    }

    if (parseFloat(amount) > 1000) { // Define limit for manager approval
      await Transaction.create({ type: 'withdrawal', amount, accountId: account.id, status: 'pending' });
      return res.status(200).json({ message: 'Withdrawal pending approval' });
    }

    account.balance = parseFloat(account.balance) - parseFloat(amount);
    await account.save();
    await Transaction.create({ type: 'withdrawal', amount, accountId: account.id, status: 'approved' });
    
    res.status(200).json({ balance: account.balance });
  } catch (error) {
    res.status(400).json({ message: 'Error withdrawing money', error });
  }
};

const viewTransactionHistory = async (req, res) => {
  try {
    const account = await Account.findOne({ where: { userId: req.user.id } });
    const transactions = await Transaction.findAll({ where: { accountId: account.id } });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching transactions', error });
  }
};

module.exports = { viewBalance, depositMoney, withdrawMoney, viewTransactionHistory };

