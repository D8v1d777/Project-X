import React from 'react';
import { Card, Row, Col, Table, Tag, Space, Button, Descriptions, Statistic } from 'antd';
import { BarChartOutlined, CalendarOutlined, FileTextOutlined, UsergroupAddOutlined, SafetyCertificateOutlined, SolutionOutlined } from '@ant-design/icons';

const ResourcesPage: React.FC = () => {
  const columns = [
    {
      title: 'Resource Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = '';
        if (status === 'Available') color = 'green';
        else if (status === 'In Use') color = 'orange';
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
          <Button type="link">Reserve</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Science Lab 1',
      type: 'Laboratory',
      location: 'Building A, Floor 2',
      status: 'Available',
    },
    {
      key: '2',
      name: 'Computer Lab 2',
      type: 'Computer Lab',
      location: 'Building B, Floor 1',
      status: 'In Use',
    },
    {
      key: '3',
      name: 'Projector - Room 101',
      type: 'AV Equipment',
      location: 'Room 101',
      status: 'Available',
    },
  ];

  return (
    <>
      <div style={{ padding: '24px', background: '#fff', minHeight: '360px' }}>
        <h2>Resource & Asset Management</h2>
        <div style={{ marginBottom: '16px' }}>
          <Button type="primary">Add Resource</Button>
          <Button style={{ marginLeft: '8px' }}>Import Resources</Button>
          <Button style={{ marginLeft: '8px' }}>AI Utilization Analyzer</Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10 }}
          rowKey="key"
        />

        <div style={{ marginTop: '24px' }}>
          <Card title="Resource Statistics" bordered={false} style={{ marginBottom: '16px' }}>
            <Descriptions column={4}>
              <Descriptions.Item label="Total Resources">125</Descriptions.Item>
              <Descriptions.Item label="Available Resources">98</Descriptions.Item>
              <Descriptions.Item label="Under Maintenance">12</Descriptions.Item>
              <Descriptions.Item label="Utilization Rate">78%</Descriptions.Item>
            </Descriptions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ResourcesPage;