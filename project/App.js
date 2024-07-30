import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Home from './components/Home';
import ProfileAccountHolder from './components/ProfileAccountHolder';
import ProfileManager from './components/ProfileManager';
import ManagerDashboard from './components/ManagerDashboard';
import AccountHolderDashboard from './components/accountHolderDashboard';
import PendingRequest from './components/PendingRequest';
import AccountDetails from './components/accountDetails';
import GenerateAccountStatements from './components/GenerateAccountStatements';
import TransactionHistory from './components/ViewTranscationHistory';
import DepositMoney from './components/depositMoney';
import WithdrawMoney from './components/WithDrawMoney';
import { AuthContext } from './components/authContext';
import './App.css';

const App = () => {
  const { user  } = useContext(AuthContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profileccount-holder" element={<ProfileAccountHolder />} />
        <Route path="/profile-manager" element={<ProfileManager />} />
        <Route path="/manager-dashboard" element={<ManagerDashboard />} />
        <Route path="/account-holder-dashboard" element={<AccountHolderDashboard />} />
        <Route path="/pending-requests" element={<PendingRequest />} />
        <Route path="/account-details" element={<AccountDetails />} />
        <Route path="/generate-account-statements" element={<GenerateAccountStatements />} />
        <Route path="/view-transaction-history" element={<TransactionHistory/>} />
        <Route path="/deposit-money" element={<DepositMoney />} />
        <Route path="/withdraw-money" element={<WithdrawMoney />} />
      </Routes>
    </div>
  );
};

export default App;



