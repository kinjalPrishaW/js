const express = require('express');
const { viewAccounts, approveRejectWithdrawals } = require('../controllers/managerController');
const authenticate = require('../middleware/authMiddleware.js');
const authorize = require('../middleware/roleMiddleware');

const router = express.Router();

router.get('/accounts', authenticate, authorize('manager'), viewAccounts);
router.put('/withdrawals/:withdrawalId', authenticate, authorize('manager'), approveRejectWithdrawals);

module.exports = router;
