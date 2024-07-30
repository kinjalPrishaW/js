import React, { useEffect, useState } from 'react';
import { Layout, Menu, Table, Typography, Card, Avatar, Dropdown, Button, notification } from 'antd';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Header, Content } = Layout;
const { Title } = Typography;

const Dashboard = ({ setAccounts }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get('/api/manager/accounts');
        setAccounts(response.data);
      } catch (error) {
        console.error('Error fetching accounts:', error);
        notification.error({
          message: 'Error',
          description: 'Failed to fetch accounts. Please try again later.',
        });
      }
    };

    fetchAccounts();
  }, [setAccounts]);

  const handleViewAccounts = () => {
    navigate("/view-accounts");
  };

  const handlePendingWithdrawals = () => {
    navigate("/pending-withdrawals");
  };

  const handleGenerateStatements = () => {
    navigate("/generate-statements");
  };

  const handleProfileClick = () => {
    navigate("/profilemanager");
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  const profileMenu = (
    <Menu>
      <Menu.Item key="profile" onClick={handleProfileClick}>
        View Profile
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#001529', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={2} style={{ color: '#fff', margin: 0 }}>Manager Dashboard</Title>
        <Dropdown overlay={profileMenu} trigger={['click']}>
          <Avatar style={{ cursor: 'pointer' }} icon={<UserOutlined />} />
        </Dropdown>
      </Header>
      <Content style={{ padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Menu
            style={{ width: 256 }}
            mode="inline"
            defaultSelectedKeys={['1']}
            theme="dark"
          >
            <Menu.Item key="1" onClick={handleViewAccounts}>
              View Accounts
            </Menu.Item>
            <Menu.Item key="2" onClick={handlePendingWithdrawals}>
              Pending Withdrawals
            </Menu.Item>
            <Menu.Item key="3" onClick={handleGenerateStatements}>
              Generate Account Statements
            </Menu.Item>
          </Menu>

          <div style={{ flex: 1, marginLeft: '20px' }}>
            <Card title="Welcome to the Manager Dashboard" style={{ width: '100%' }}>
              <Title level={4}>Manage accounts and approvals efficiently</Title>
              <p>
                Use the menu on the left to navigate through the various sections.
                You can view all accounts, manage withdrawal requests, and generate account statements.
              </p>
              <Button type="primary" onClick={handleViewAccounts}>
                View Accounts
              </Button>
            </Card>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

const ManagerDashboard = ({ accounts, pendingWithdrawals }) => {
  const columns = [
    {
      title: 'Account ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
      render: (user) => user.username,
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
      render: (balance) => `$${balance.toFixed(2)}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => status.charAt(0).toUpperCase() + status.slice(1),
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Account Details</Title>
      {accounts.length > 0 ? (
        <Table dataSource={accounts} columns={columns} rowKey="id" />
      ) : (
        <p>No data found.</p>
      )}
      <Title level={2} style={{ marginTop: '20px' }}>Pending Withdrawal Requests</Title>
      {pendingWithdrawals.length > 0 ? (
        <Table dataSource={pendingWithdrawals} columns={columns} rowKey="id" />
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
};

// App component to include routing
const App = () => {
  const [accounts, setAccounts] = useState([]);
  const [pendingWithdrawals, setPendingWithdrawals] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard setAccounts={setAccounts} />} />
      <Route path="/view-accounts" element={<ManagerDashboard accounts={accounts} />} />
      <Route path="/pending-withdrawals" element={<ManagerDashboard pendingWithdrawals={pendingWithdrawals} />} />
    </Routes>
  );
};

export default App;
