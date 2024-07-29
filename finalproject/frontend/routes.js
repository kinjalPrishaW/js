// /src/routes.js

import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Balance from './components/AccountHolder/Balance';
import Deposit from './components/AccountHolder/Deposit';
import Withdraw from './components/AccountHolder/Withdraw';
import Transactions from './components/AccountHolder/Transaction';
import Accounts from './components/Manager/Accounts';
import ApproveWithdrawals from './components/Manager/ApproveWithdrawals';
import AccountStatements from './components/Manager/AccountStatements';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/manager/accounts" element={<Accounts />} />
        <Route path="/manager/withdrawals" element={<ApproveWithdrawals />} />
        <Route path="/manager/accounts/:accountId/statements" element={<AccountStatements />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
