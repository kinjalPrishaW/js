// /src/components/AccountHolder/Transactions.js

import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await api.get('/AccountHolder/Transactions');
        setTransactions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.date}: {transaction.type} of ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
