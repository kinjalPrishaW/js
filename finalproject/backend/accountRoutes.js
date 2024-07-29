const express = require('express');
const { viewBalance, depositMoney, withdrawMoney, viewTransactionHistory } = require('../controllers/accountHolder');
const authenticate = require('../middleware/authMiddleware.js')

const router = express.Router();

router.get('/balance', authenticate, viewBalance);
router.post('/deposit', authenticate, depositMoney);
router.post('/withdraw', authenticate, withdrawMoney);
router.get('/transactions', authenticate, viewTransactionHistory);

module.exports = router;
// const authenticate = require('..authMiddleware./middleware/authMiddleware');
