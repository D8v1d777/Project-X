import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginPage: React.FC = () => {
  const [form] = Form.useForm();
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    // Simulate API call
    console.log('Received values of form: ', values);
    // Simulate delay
    setTimeout(() => {
      // In a real app, you would check the credentials against a backend
      // For now, we'll just redirect if the username and password are not empty
      if (values.userName && values.password) {
        // Store user info in localStorage or context
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', values.userName);
        navigate('/dashboard', { replace: true });
      } else {
        alert('Please enter username and password');
      }
    }, 1000);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <Card
        title="Login"
        style={{ width: 360 }}
      >
        <Form
          form={form}
          layout="vertical"
          name="login"
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="Username"
            name="userName"
            rules={[{
              required: true,
              message: 'Please input your username!',
            }]}
          >
            <Input.Prefix>
              <UserOutlined />
            </Input.Prefix>
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{
              required: true,
              message: 'Please input your Password!',
            }]}
            hasFeedback
          >
            <Input.Prefix>
              <LockOutlined />
            </Input.Prefix>
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>
                Remember me
              </Checkbox>
            </Form.Item>
            <a href="">Forgot password</a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;