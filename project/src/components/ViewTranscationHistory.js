import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Layout, Table, Typography, Button, notification } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;
const { Content } = Layout;

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('/api/account/transactions');
        setTransactions(response.data);
      } catch (error) {
        console.error('Failed to fetch transactions:', error);
        setError('Failed to load transaction history.');
        notification.error({
          message: 'Error',
          description: 'Failed to load transaction history. Please try again later.',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (text) => new Date(text).toLocaleDateString(),
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type) => type.charAt(0).toUpperCase() + type.slice(1),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount) => `$${amount.toFixed(2)}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => status.charAt(0).toUpperCase() + status.slice(1),
    },
  ];

  const goBack = () => {
    navigate('/AccountHolderDashboard'); // Adjust navigation path as needed
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <Content style={{ padding: '50px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>Transaction History</Title>
        <Table
          dataSource={transactions}
          columns={columns}
          rowKey="id"
          loading={loading}
          pagination={{ pageSize: 10 }}
        />
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
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

export default TransactionHistory;
