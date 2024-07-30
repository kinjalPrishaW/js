import React, { useState } from 'react';
import { Layout, Form, Input, Button, Typography, Row, Col, Select, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import axios from 'axios';
import 'antd/dist/antd.css'; 

const { Title } = Typography;
const { Header, Content } = Layout;
const { Option } = Select;

const Register = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log('Received values from register form: ', values);
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', values);
      console.log('Response:', response.data);
        notification.success({
            message: 'Registration Successful',
            description: 'You have registered successfully. Please log in.',
            placement: 'topRight',
        });
        navigate('/login')
} catch (err) {
    console.error('Error during registration', err);
    notification.error({ 
        message: 'Registration Failed',
        description: 'An error occurred during registration',
        placement: 'topRight',
    });
    setError('An error occurred during registration');
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
              <Title level={3} style={{ textAlign: 'center' }}>Register</Title>
              {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
              <Form
                name="register"
                layout="vertical"
                onFinish={onFinish}
              >
                <Form.Item
                  name="email"
                  rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}>
                  <Input prefix={<MailOutlined />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}>
                  <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}>
                  <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                </Form.Item>
                <Form.Item
                  name="role"
                  rules={[{ required: true, message: 'Please select your role!' }]}>
                  <Select placeholder="Select your role">
                    <Option value="manager">Manager</Option>
                    <Option value="employee">Employee</Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                    Register
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Link to="/login" style={{ display: 'block', textAlign: 'center' }}>
                    Already have an account? Login here
                  </Link>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );

};
export default Register;

