import React, {useContext,useState} from 'react';
import { Layout, Form, Input, Button, Typography, Row, Col} from 'antd';
import { Link , useNavigate} from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import { AuthContext } from './authContext';
const { Title } = Typography;
const { Header, Content } = Layout;

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
 
  const onFinish = async (values) => {
    try {
      console.log('logiOn',username,password);
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        username,
        password,
      });
       
      if (response.data.success) {
        console.log(response.data);
        sessionStorage.setItem('token', response.data.token); 
        sessionStorage.setItem('username',response.data.user.username);
        sessionStorage.setItem('role', response.data.user.role);
        if (response.data.user.role === 'manager') {
          navigate('/manager');
        } else if (response.data.user.role === 'employee') {
          navigate('/employee');
        }
      } else {
        setError('Invalid login credentials');
      }
    } catch (error) {
      console.error('Error during login', error);
      setError('An error occurred during login');
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#001529', color: '#fff', textAlign: 'center' }}>
        <Title level={2} style={{ color: '#fff', margin: 0 }}>Employee Leave Management System</Title>
      </Header>
      <Content style={{ padding: '50px', background: '#f0f2f5' }}>
        <Row justify="center">
          <Col xs={24} sm={12} md={8}>
            <div style={{ background: '#fff', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
              <Title level={3} style={{ textAlign: 'center' }}>Login</Title>
              <Form
                name="login"
                layout="vertical"
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input 
                    prefix={<UserOutlined />} 
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)} 
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password 
                    prefix={<LockOutlined />} 
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} 
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                    Login
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Link to="/register" style={{ display: 'block', textAlign: 'center' }}>
                    Don't have an account? Register here
                  </Link>
                </Form.Item>
              </Form>
              {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>} 
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Login;