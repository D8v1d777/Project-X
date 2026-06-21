import React from 'react';
import { Card, Row, Col, Table, Tag, Space, Button, Descriptions, Statistic } from 'antd';
import { SettingOutlined, CalendarOutlined, FileTextOutlined, UsergroupAddOutlined, SafetyCertificateOutlined, SolutionOutlined } from '@ant-design/icons';

const AdminPage: React.FC = () => {
  const columns = [
    {
      title: 'Module',
      dataIndex: 'module',
      key: 'module',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = '';
        if (status === 'Online') color = 'green';
        else if (status === 'Offline') color = 'red';
        else if (status === 'Maintenance') color = 'orange';
        else color = 'default';
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: 'Last Updated',
      dataIndex: 'lastUpdated',
      key: 'lastUpdated',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Space>
          <Button type="link">Configure</Button>
          <Button type="link">Restart</Button>
          <Button type="link">Logs</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      module: 'Auth Service',
      status: 'Online',
      lastUpdated: '2026-06-21 08:00',
    },
    {
      key: '2',
      module: 'Student Info System',
      status: 'Online',
      lastUpdated: '2026-06-21 07:45',
    },
    {
      key: '3',
      module: 'Academic Management',
      status: 'Online',
      lastUpdated: '2026-06-21 07:50',
    },
    {
      key: '4',
      module: 'Finance & Payments',
      status: 'Online',
      lastUpdated: '2026-06-21 07:55',
    },
    {
      key: '5',
      module: 'AI Tunnel',
      status: 'Online',
      lastUpdated: '2026-06-21 08:00',
    },
  ];

  return (
    <>
      <div style={{ padding: '24px', background: '#fff', minHeight: '360px' }}>
        <h2>System Administration</h2>
        <div style={{ marginBottom: '16px' }}>
          <Button type="primary">System Settings</Button>
          <Button style={{ marginLeft: '8px' }}>Manage Users</Button>
          <Button style={{ marginLeft: '8px' }}>View System Logs</Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10 }}
          rowKey="key"
        />

        <div style={{ marginTop: '24px' }}>
          <Card title="System Overview" bordered={false} style={{ marginBottom: '16px' }}>
            <Descriptions column={4}>
              <Descriptions.Item label="System Status">Online</Descriptions.Item>
              <Descriptions.Item label="Uptime">99.9%</Descriptions.Item>
              <Descriptions.Item label="Active Users">124</Descriptions.Item>
              <Descriptions.Item label="AI Tunnel Status">Connected</Descriptions.Item>
            </Descriptions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AdminPage;