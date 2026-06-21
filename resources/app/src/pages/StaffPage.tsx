import React from 'react';
import { Card, Row, Col, Table, Tag, Space, Button, Descriptions } from 'antd';
import { UserOutlined, CalendarOutlined, FileTextOutlined, SolutionOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

const StaffPage: React.FC = () => {
  const columns = [
    {
      title: 'Employee ID',
      dataIndex: 'employeeId',
      key: 'employeeId',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Performance Score',
      dataIndex: 'performanceScore',
      key: 'performanceScore',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Space>
          <Button type="link">View</Button>
          <Button type="link">Edit</Button>
          <Button type="link">Evaluate</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      employeeId: 'E001',
      name: 'Mr. John Smith',
      department: 'Mathematics',
      position: 'Senior Teacher',
      performanceScore: 8.5,
    },
    {
      key: '2',
      employeeId: 'E002',
      name: 'Ms. Jane Doe',
      department: 'Science',
      position: 'Teacher',
      performanceScore: 9.2,
    },
    {
      key: '3',
      employeeId: 'E003',
      name: 'Mr. Robert Johnson',
      department: 'English',
      position: 'Department Head',
      performanceScore: 8.8,
    },
  ];

  return (
    <>
      <div style={{ padding: '24px', background: '#fff', minHeight: '360px' }}>
        <h2>Staff Management</h2>
        <div style={{ marginBottom: '16px' }}>
          <Button type="primary">Add New Staff</Button>
          <Button style={{ marginLeft: '8px' }}>Import Staff</Button>
          <Button style={{ marginLeft: '8px' }}>AI Performance Analysis</Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10 }}
          rowKey="key"
        />

        <div style={{ marginTop: '24px' }}>
          <Card title="Staff Performance Overview" bordered={false} style={{ marginBottom: '16px' }}>
            <Descriptions column={4}>
              <Descriptions.Item label="Total Staff">45</Descriptions.Item>
              <Descriptions.Item label="Teaching Staff">32</Descriptions.Item>
              <Descriptions.Item label="Non-Teaching Staff">13</Descriptions.Item>
              <Descriptions.Item label="Average Performance">8.6/10</Descriptions.Item>
            </Descriptions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default StaffPage;