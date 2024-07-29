// /src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Balance from './components/AccountHolder/Balance';
import Deposit from './components/AccountHolder/Deposit';
import Withdraw from './components/AccountHolder/Withdraw';
import Transactions from './components/AccountHolder/transactions';
import Accounts from './components/Manager/Accounts';
import ApproveWithdrawals from './components/Manager/ApproveWithdrawals';
import AccountStatements from './components/Manager/AccountStatements';
import { AuthProvider } from './context/AuthContext';






function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Account Holder Routes */}
          <Route path="/balance" element={<Balance />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/transactions" element={<Transactions />} />
          
          {/* Manager Routes */}
          <Route path="/manager/accounts" element={<Accounts />} />
          <Route path="/manager/withdrawals" element={<ApproveWithdrawals />} />
          <Route path="/manager/accounts/:accountId/statements" element={<AccountStatements />} />
          
          {/* Default Route (optional) */}
          <Route path="/" element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

