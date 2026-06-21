import React from 'react';
import { Card, Row, Col, Table, Tag, Space, Button, Descriptions, Statistic } from 'antd';
import { FundOutlined, CalendarOutlined, FileTextOutlined, UsergroupAddOutlined, SafetyCertificateOutlined, SwapOutlined } from '@ant-design/icons';

const TransportPage: React.FC = () => {
  const columns = [
    {
      title: 'Route',
      dataIndex: 'route',
      key: 'route',
    },
    {
      title: 'Vehicle',
      dataIndex: 'vehicle',
      key: 'vehicle',
    },
    {
      title: 'Driver',
      dataIndex: 'driver',
      key: 'driver',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = '';
        if (status === 'On Time') color = 'green';
        else if (status === 'Delayed') color = 'orange';
        else if (status === 'Maintenance') color = 'red';
        else color = 'default';
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Space>
          <Button type="link">View</Button>
          <Button type="link">Edit</Button>
          <Button type="link">Track GPS</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      route: 'North Route - Main St to School',
      vehicle: 'Bus #001',
      driver: 'Mr. David Wilson',
      status: 'On Time',
    },
    {
      key: '2',
      route: 'South Route - Oak Ave to School',
      vehicle: 'Bus #002',
      driver: 'Ms. Sarah Johnson',
      status: 'Delayed',
    },
    {
      key: '3',
      route: 'East Route - Pine St to School',
      vehicle: 'Van #003',
      driver: 'Mr. Michael Brown',
      status: 'On Time',
    },
  ];

  return (
    <>
      <div style={{ padding: '24px', background: '#fff', minHeight: '360px' }}>
        <h2>Transport Management</h2>
        <div style={{ marginBottom: '16px' }}>
          <Button type="primary">Add Route</Button>
          <Button style={{ marginLeft: '8px' }}>Manage Fleet</Button>
          <Button style={{ marginLeft: '8px' }}>AI Route Optimizer</Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10 }}
          rowKey="key"
        />

        <div style={{ marginTop: '24px' }}>
          <Card title="Transport Statistics" bordered={false} style={{ marginBottom: '16px' }}>
            <Descriptions column={4}>
              <Descriptions.Item label="Total Vehicles">15</Descriptions.Item>
              <Descriptions.Item label="Active Routes">12</Descriptions.Item>
              <Descriptions.Item label="Students Transported">450</Descriptions.Item>
              <Descriptions.Item label="On-Time Performance">88%</Descriptions.Item>
            </Descriptions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TransportPage;