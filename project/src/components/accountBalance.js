import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Layout, Card, Typography, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;
const { Content } = Layout;

const AccountBalance = () => {
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get('/api/account/balance'); // Adjust endpoint as needed
        setBalance(response.data.currentBalance); // Adjust based on API response structure
      } catch (error) {
        console.error('Failed to fetch account balance:', error);
      }
    };

    fetchBalance();
  }, []);

  const goBack = () => {
    navigate('/AccountHolderDashboard'); // Adjust navigation path as needed
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <Content style={{ padding: '50px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>Account Balance</Title>
        <Card title="Current Balance" bordered={true} style={{ textAlign: 'center', height: '100%' }}>
          <Title level={3}>${balance.toFixed(2)}</Title> {/* Format as currency */}
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

export default AccountBalance;
