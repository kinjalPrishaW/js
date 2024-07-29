const Account = require('../models/account');
const Transaction = require('../models/transaction');

const viewAccounts = async (req, res) => {
  try {
    const accounts = await Account.findAll();
    res.send(accounts);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const approveRejectWithdrawals = async (req, res) => {
  const { withdrawalId } = req.params;
  const { status } = req.body;

  try {
    const transaction = await Transaction.findOne({ where: { id: withdrawalId, status: 'pending' } });
    if (!transaction) {
      return res.status(404).send({ error: 'Withdrawal request not found or already processed.' });
    }

    if (status === 'approved') {
      const account = await Account.findOne({ where: { id: transaction.accountId } });
      account.balance -= parseFloat(transaction.amount);
      await account.save();
    }

    transaction.status = status;
    await transaction.save();

    res.send(transaction);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { viewAccounts, approveRejectWithdrawals };
