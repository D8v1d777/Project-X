import React from 'react';
import { Card, Row, Col, Table, Tag, Space, Button, Descriptions, Statistic } from 'antd';
import { SwapOutlined, CalendarOutlined, FileTextOutlined, UsergroupAddOutlined, SafetyCertificateOutlined, SolutionOutlined } from '@ant-design/icons';

const CommunicationsPage: React.FC = () => {
  const columns = [
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
      width: 300,
    },
    {
      title: 'Sender',
      dataIndex: 'sender',
      key: 'sender',
      width: 150,
    },
    {
      title: 'Recipient',
      dataIndex: 'recipient',
      key: 'recipient',
      width: 150,
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      width: 100,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 80,
      render: (status: string) => {
        let color = 'default';
        if (status === 'Read') color = 'green';
        else if (status === 'Delivered') color = 'blue';
        else if (status === 'Pending') color = 'orange';
        else color = 'red';
        return <Tag color={color}>{status}</Tag>;
      },
    },
  ];

  const data = [
    {
      key: '1',
      message: 'Reminder: Parent-Teacher meeting tomorrow at 5 PM',
      sender: 'Class Teacher',
      recipient: 'Parents of Grade 10A',
      time: '09:00',
      status: 'Delivered',
    },
    {
      key: '2',
      message: 'Fee payment reminder for June',
      sender: 'Finance Office',
      recipient: 'All Parents',
      time: '08:30',
      status: 'Pending',
    },
    {
      key: '3',
      message: 'Exam schedule released for Grade 9-12',
      sender: 'Academic Office',
      recipient: 'Students and Parents',
      time: '16:45',
      status: 'Read',
    },
  ];

  return (
    <>
      <div style={{ padding: '24px', background: '#fff', minHeight: '360px' }}>
        <h2>Communications & Notifications Hub</h2>
        <div style={{ marginBottom: '16px' }}>
          <Button type="primary">Send Announcement</Button>
          <Button style={{ marginLeft: '8px' }}>View Templates</Button>
          <Button style={{ marginLeft: '8px' }}>AI Smart Router</Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10 }}
          rowKey="key"
        />

        <div style={{ marginTop: '24px' }}>
          <Card title="Communication Statistics" bordered={false} style={{ marginBottom: '16px' }}>
            <Descriptions column={4}>
              <Descriptions.Item label="Messages Sent Today">28</Descriptions.Item>
              <Descriptions.Item label="Unread Messages">5</Descriptions.Item>
              <Descriptions.Item label="Parent Engagement Rate">92%</Descriptions.Item>
              <Descriptions.Item label="AI Routed Messages">15</Descriptions.Item>
            </Descriptions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CommunicationsPage;