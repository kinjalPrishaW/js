import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import api from '../../services/api';

const Balance = () => {
  const [balance, setBalance] = useState(0);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await api.get('/account/balance');
        setBalance(response.data.balance);
      } catch (error) {
        console.error(error);
      }
    };

    if (user) {
      fetchBalance();
    }
  }, [user]);

  return (
    <div>
      <h2>Account Balance</h2>
      <p>{balance}</p>
    </div>
  );
};

export default Balance;
