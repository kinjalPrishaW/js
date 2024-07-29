import React, { useState } from 'react';
import api from '../../services/api';

const Deposit = () => {
  const [amount, setAmount] = useState('');

  const handleDeposit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/account/deposit', { amount });
      alert('Deposit successful');
      setAmount('');
    } catch (error) {
      console.error(error);
      alert('Deposit failed');
    }
  };

  return (
    <form onSubmit={handleDeposit}>
      <h2>Deposit Money</h2>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <button type="submit">Deposit</button>
    </form>
  );
};

export default Deposit;
