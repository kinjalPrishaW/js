import React from 'react';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/register">Register</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Button type="primary" onClick={() => {sessionStorage.clear(); navigate('/');}}>
              Logout
            </Button>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        </Breadcrumb>
        <div className="site-layout-content">
          <h1>Welcome to the Bank Management System</h1>
          <p>Manage your banking system efficiently.</p>
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
