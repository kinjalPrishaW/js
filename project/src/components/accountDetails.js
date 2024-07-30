import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { Layout, Table, Button } from 'antd';

const { Content } = Layout;

const AccountDetails = () => {
    const [balances, setBalances] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchBalances = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/auth/balances');
        setBalances(response.data);
      } catch (error) {
        console.error('Failed to fetch account balances:', error);
      }
    };
    fetchBalances();
    
  }, []);

  const columns = [
    {
      title: 'Account Holder',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email Id',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Account Balance',
      dataIndex: 'balance',
      key: 'balance',
      render: (text) => `$${text}`, // Format balance as currency
    },
    {
      title: 'Account Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh', padding: '24px' }}>
      <Content style={{ background: '#fff', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2>Account Details</h2>
        
        <Button 
          type="primary" 
          style={{ marginBottom: '16px' }} 
          onClick={() => navigate('/manager')} // Navigate to account holder dashboard
        >
          Go Back to Dashboard
        </Button>
        
        <Table dataSource={balances} columns={columns} rowKey="id" pagination={false} />
      </Content>
    </Layout>
  );
};

export default AccountDetails;
