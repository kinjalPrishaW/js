import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Typography, Card, Row, Col, Dropdown, Avatar, Menu, Button } from 'antd';
import {
  WalletOutlined,
  CreditCardOutlined,
  ArrowUpOutlined,
  HistoryOutlined,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const AccountHolderDashboard = () => {
  const navigate = useNavigate();

  const profileMenu = (
    <Menu>
      <Menu.Item key="profile" onClick={() => navigate("/profileaccountholder")}>
        View Profile
      </Menu.Item>
      <Menu.Item 
        key="logout" 
        onClick={() => { 
          sessionStorage.clear();
          navigate('/'); 
        }}
      >
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#001529', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={2} style={{ color: '#fff', margin: '0' }}>Account Holder Dashboard</Title>
        <Dropdown overlay={profileMenu} trigger={['click']}>
          <Avatar style={{ cursor: 'pointer' }} icon={<UserOutlined />} />
        </Dropdown>
      </Header>
      <Content style={{ padding: '20px', background: '#f0f2f5' }}>
        <Row gutter={16}>
          <Col span={6}>
            <Card 
              title="View Balance" 
              hoverable 
              onClick={() => navigate("/view-balance")} 
              style={{ cursor: 'pointer' }}
              actions={[<WalletOutlined key="balance" />]}
            >
              <p>Check your current account balance.</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card 
              title="Deposit Money" 
              hoverable 
              onClick={() => navigate("/deposit-money")} 
              style={{ cursor: 'pointer' }}
              actions={[<CreditCardOutlined key="deposit" />]}
            >
              <p>Deposit money into your account.</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card 
              title="Withdraw Money" 
              hoverable 
              onClick={() => navigate("/withdraw-money")} 
              style={{ cursor: 'pointer' }}
              actions={[<ArrowUpOutlined key="withdraw" />]}
            >
              <p>Withdraw money from your account (requires approval for large amounts).</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card 
              title="Transaction History" 
              hoverable 
              onClick={() => navigate("/transaction-history")} 
              style={{ cursor: 'pointer' }}
              actions={[<HistoryOutlined key="history" />]}
            >
              <p>View your transaction history.</p>
            </Card>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <Button type="primary" onClick={() => navigate('/')}>
          <HomeOutlined /> Go to Home
        </Button>
      </Footer>
    </Layout>
  );
};

export default AccountHolderDashboard;


  