import React, { useState } from 'react';
import axios from 'axios';
import { Layout, Card, Typography, Button, Input, Form, notification } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;
const { Content } = Layout;

const DepositMoney = () => {
  const [depositAmount, setDepositAmount] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleDeposit = async () => {
    try {
      const amount = parseFloat(depositAmount);
      if (isNaN(amount) || amount <= 0) {
        setError('Please enter a valid amount.');
        return;
      }

      const response = await axios.post('/api/account/deposit', { amount });
      setSuccess('Deposit successful!');
      setDepositAmount('');
      notification.success({
        message: 'Success',
        description: 'Deposit was successful. Your balance has been updated.',
      });
    } catch (error) {
      console.error('Failed to deposit money:', error);
      setError('Deposit failed. Please try again.');
      notification.error({
        message: 'Error',
        description: 'Deposit failed. Please check your amount and try again.',
      });
    }
  };

  const handleChange = (e) => {
    setDepositAmount(e.target.value);
  };

  const goBack = () => {
    navigate('/AccountHolderDashboard'); // Adjust navigation path as needed
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <Content style={{ padding: '50px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>Deposit Money</Title>
        <Card title="Deposit Funds" bordered={true} style={{ textAlign: 'center', height: '100%' }}>
          <Form layout="vertical">
            <Form.Item label="Amount">
              <Input 
                type="number" 
                value={depositAmount} 
                onChange={handleChange} 
                placeholder="Enter amount to deposit"
              />
            </Form.Item>
            <Button 
              type="primary" 
              onClick={handleDeposit}
              style={{ marginTop: '20px' }}
            >
              Deposit
            </Button>
          </Form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
        </Card>
        <Button 
          type="default" 
          onClick={goBack} 
          style={{ marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        >
          Go Back to Dashboard
        </Button>
      </Content>
    </Layout>
  );
};

export default DepositMoney;
