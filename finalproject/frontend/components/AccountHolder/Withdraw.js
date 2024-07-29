import React, { useState } from 'react';
import api from '../../services/api';

const Withdraw = () => {
  const [amount, setAmount] = useState('');

  const handleWithdraw = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/account/withdraw', { amount });
      alert(response.data.message || 'Withdrawal successful');
      setAmount('');
    } catch (error) {
      console.error(error);
      alert('Withdrawal failed');
    }
  };

  return (
    <form onSubmit={handleWithdraw}>
      <h2>Withdraw Money</h2>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <button type="submit">Withdraw</button>
    </form>
  );
};

export default Withdraw;
