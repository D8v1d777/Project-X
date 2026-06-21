import React from 'react';
import { Card, Row, Col, Table, Tag, Space, Button, Descriptions, Statistic } from 'antd';
import { DollarOutlined, CalendarOutlined, FileTextOutlined, BarChartOutlined, SafetyCertificateOutlined, FundOutlined } from '@ant-design/icons';

const FinancePage: React.FC = () => {
  const columns = [
    {
      title: 'Fee Type',
      dataIndex: 'feeType',
      key: 'feeType',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = '';
        if (status === 'Paid') color = 'green';
        else if (status === 'Pending') color = 'orange';
        else if (status === 'Overdue') color = 'red';
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
          <Button type="link">Pay</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      feeType: 'Tuition Fee',
      amount: '$500',
      dueDate: '2026-07-01',
      status: 'Pending',
    },
    {
      key: '2',
      feeType: 'Transport Fee',
      amount: '$100',
      dueDate: '2026-07-01',
      status: 'Paid',
    },
    {
      key: '3',
      feeType: 'Library Fee',
      amount: '$25',
      dueDate: '2026-06-15',
      status: 'Overdue',
    },
  ];

  return (
    <>
      <div style={{ padding: '24px', background: '#fff', minHeight: '360px' }}>
        <h2>Financial Management & Payments</h2>
        <div style={{ marginBottom: '16px' }}>
          <Button type="primary">Add Fee Record</Button>
          <Button style={{ marginLeft: '8px' }}>Import Fees</Button>
          <Button style={{ marginLeft: '8px' }}>AI Defaulter Prediction</Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10 }}
          rowKey="key"
        />

        <div style={{ marginTop: '24px' }}>
          <Card title="Financial Overview" bordered={false} style={{ marginBottom: '16px' }}>
            <Descriptions column={4}>
              <Descriptions.Item label="Total Fees Collected">$124,500</Descriptions.Item>
              <Descriptions.Item label="Pending Payments">$12,300</Descriptions.Item>
              <Descriptions.Item label="Overdue Payments">$1,850</Descriptions.Item>
              <Descriptions.Item label="Collection Rate">92%</Descriptions.Item>
            </Descriptions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FinancePage;