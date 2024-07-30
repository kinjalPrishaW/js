import React, { useEffect, useState } from 'react';
import { Layout, Table, Typography, notification } from 'antd';
import axios from 'axios';

const { Content } = Layout;
const { Title } = Typography;

const ManagerViewAccounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get('/api/manager/accounts');
        setAccounts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching accounts:', error);
        notification.error({
          message: 'Error',
          description: 'Failed to fetch accounts. Please try again later.',
        });
        setLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  const columns = [
    {
      title: 'Account ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Username',
      dataIndex: ['user', 'username'],
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: ['user', 'email'],
      key: 'email',
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
      render: (balance) => `$${balance.toFixed(2)}`,
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '20px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>
          View All Accounts
        </Title>
        <Table
          dataSource={accounts}
          columns={columns}
          rowKey="id"
          loading={loading}
        />
      </Content>
    </Layout>
  );
};

export default ManagerViewAccounts;
