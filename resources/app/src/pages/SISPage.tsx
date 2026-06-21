import React from 'react';
import { Card, Row, Col, Table, Tag, Space, Button } from 'antd';
import { UsergroupAddOutlined, CalendarOutlined, FileTextOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

const SISPage: React.FC = () => {
  const columns = [
    {
      title: 'Admission No',
      dataIndex: 'admissionNo',
      key: 'admissionNo',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Class',
      dataIndex: 'class',
      key: 'class',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = '';
        if (status === 'Active') color = 'green';
        else if (status === 'Inactive') color = 'red';
        else color = 'orange';
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: 'Risk Score',
      dataIndex: 'riskScore',
      key: 'riskScore',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Space>
          <Button type="link">View</Button>
          <Button type="link">Edit</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      admissionNo: 'S001',
      name: 'John Doe',
      class: 'Grade 10A',
      status: 'Active',
      riskScore: 25,
    },
    {
      key: '2',
      admissionNo: 'S002',
      name: 'Jane Smith',
      class: 'Grade 9B',
      status: 'Active',
      riskScore: 45,
    },
    {
      key: '3',
      admissionNo: 'S003',
      name: 'Bob Johnson',
      class: 'Grade 11A',
      status: 'Active',
      riskScore: 60,
    },
  ];

  return (
    <>
      <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        <h2>Student Information System</h2>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary">Add New Student</Button>
          <Button style={{ marginLeft: 8 }}>Import Students</Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10 }}
          rowKey="key"
        />
      </div>
    </>
  );
};

export default SISPage;