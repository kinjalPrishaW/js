import React, { useEffect, useState } from 'react';
import { Layout, Typography, Button, Card, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserOutlined } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const ProfileAccountHolder = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: '', role: '' });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = sessionStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }
        const response = await axios.get('http://localhost:3000/api/account-holder/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
        toast.error(error.response?.data?.message || 'Failed to fetch user profile', { position: "top-right" });
        if (error.response?.status === 401) {
          navigate('/login');
        }
      }
    };

    fetchUserProfile();
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  return (
    <Layout style={{ minHeight: '100vh', background: 'linear-gradient(to right, #74ebd5, #ACB6E5)' }}>
      <Header style={{ background: 'transparent', boxShadow: 'none' }}>
        <Title level={2} style={{ color: '#fff', margin: '0', textAlign: 'center' }}>Account Holder Profile</Title>
      </Header>
      <Content style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card
          style={{ 
            width: 400, 
            borderRadius: '10px', 
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
            padding: '20px' 
          }}
          bordered={false}
        >
          <Row justify="center" style={{ marginBottom: '20px' }}>
            <Col>
              <UserOutlined style={{ fontSize: '60px', color: '#1890ff' }} />
            </Col>
          </Row>
          <Title level={3} style={{ textAlign: 'center', marginBottom: '10px' }}>Account Holder Profile</Title>
          <Row gutter={[0, 16]}>
            <Col span={24}>
              <Text strong style={{ fontSize: '16px' }}>Username:</Text>
              <Title level={4} style={{ margin: '0' }}>{user.username}</Title>
            </Col>
            <Col span={24}>
              <Text strong style={{ fontSize: '16px' }}>Role:</Text>
              <Title level={4} style={{ margin: '0' }}>{user.role}</Title>
            </Col>
          </Row>
          <Button type="primary" block onClick={handleLogout} style={{ marginTop: '20px' }}>
            Logout
          </Button>
        </Card>
      </Content>
      <Footer style={{ textAlign: 'center', background: 'transparent', color: '#fff' }}>
        &copy; Online Banking Application
      </Footer>
      <ToastContainer /> 
    </Layout>
  );
};

export default ProfileAccountHolder;
