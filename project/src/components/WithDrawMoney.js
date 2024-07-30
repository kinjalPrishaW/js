import React, { useState } from 'react';
import axios from 'axios';
import { Layout, Card, Typography, Button, Input, Form, notification } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;
const { Content } = Layout;

const WithdrawMoney = () => {
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [pendingApproval, setPendingApproval] = useState(false); // Track if approval is needed
  const navigate = useNavigate();

  // Define the limit for withdrawals that need manager approval
  const approvalLimit = 1000; // Example limit

  const handleWithdrawal = async () => {
    try {
      const amount = parseFloat(withdrawAmount);
      if (isNaN(amount) || amount <= 0) {
        setError('Please enter a valid amount.');
        return;
      }

      const response = await axios.post('/api/account/withdraw', { amount });
      if (response.data.status === 'pending') {
        setPendingApproval(true);
        notification.info({
          message: 'Pending Approval',
          description: 'Your withdrawal request has been submitted and is pending manager approval.',
        });
      } else {
        setSuccess('Withdrawal successful!');
        setWithdrawAmount('');
        notification.success({
          message: 'Success',
          description: 'Withdrawal was successful. Your balance has been updated.',
        });
      }
    } catch (error) {
      console.error('Failed to withdraw money:', error);
      setError('Withdrawal failed. Please try again.');
      notification.error({
        message: 'Error',
        description: 'Withdrawal failed. Please check your amount and try again.',
      });
    }
  };

  const handleChange = (e) => {
    setWithdrawAmount(e.target.value);
  };

  const goBack = () => {
    navigate('/AccountHolderDashboard'); // Adjust navigation path as needed
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <Content style={{ padding: '50px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>Withdraw Money</Title>
        <Card title="Withdraw Funds" bordered={true} style={{ textAlign: 'center', height: '100%' }}>
          <Form layout="vertical">
            <Form.Item label="Amount">
              <Input 
                type="number" 
                value={withdrawAmount} 
                onChange={handleChange} 
                placeholder="Enter amount to withdraw"
              />
            </Form.Item>
            <Button 
              type="primary" 
              onClick={handleWithdrawal}
              style={{ marginTop: '20px' }}
            >
              Withdraw
            </Button>
          </Form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
          {pendingApproval && <p style={{ color: 'blue' }}>Withdrawal pending approval.</p>}
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

export default WithdrawMoney;
