// /src/components/Manager/Accounts.js

import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await api.get('/manager/accounts');
        setAccounts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAccounts();
  }, []);

  return (
    <div>
      <h2>Accounts</h2>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            {account.username}: ${account.balance}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accounts;
