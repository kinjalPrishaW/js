// /src/components/Manager/ApproveWithdrawals.js

import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const ApproveWithdrawals = () => {
  const [pendingWithdrawals, setPendingWithdrawals] = useState([]);

  useEffect(() => {
    const fetchPendingWithdrawals = async () => {
      try {
        const response = await api.get('/manager/withdrawals');
        setPendingWithdrawals(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPendingWithdrawals();
  }, []);

  const handleApproval = async (id, approve) => {
    try {
      await api.post(`/manager/withdrawals/${id}/approve`, { approve });
      setPendingWithdrawals((prev) => prev.filter((withdrawal) => withdrawal.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Pending Withdrawals</h2>
      <ul>
        {pendingWithdrawals.map((withdrawal) => (
          <li key={withdrawal.id}>
            {withdrawal.username}: ${withdrawal.amount}
            <button onClick={() => handleApproval(withdrawal.id, true)}>Approve</button>
            <button onClick={() => handleApproval(withdrawal.id, false)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApproveWithdrawals;
