import React from 'react';
import { Card, Row, Col, Table, Tag, Space, Button, Descriptions, Statistic } from 'antd';
import { FileTextOutlined, CalendarOutlined, BookOutlined, BarChartOutlined, SolutionOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

const ExamPage: React.FC = () => {
  const columns = [
    {
      title: 'Exam Name',
      dataIndex: 'name',
      key: 'name',
      width: 200,
    },
    {
      title: 'Class',
      dataIndex: 'class',
      key: 'class',
      width: 120,
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
      width: 120,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      width: 120,
    },
    {
      title: 'Total Marks',
      dataIndex: 'totalMarks',
      key: 'totalMarks',
      width: 100,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Space>
          <Button type="link">View</Button>
          <Button type="link">Edit</Button>
          <Button type="link">Generate AI Paper</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Mid Term Mathematics',
      class: 'Grade 10A',
      subject: 'Mathematics',
      date: '2026-06-15',
      totalMarks: 100,
    },
    {
      key: '2',
      name: 'Final Science',
      class: 'Grade 10B',
      subject: 'Science',
      date: '2026-06-20',
      totalMarks: 100,
    },
    {
      key: '3',
      name: 'Unit Test English',
      class: 'Grade 9A',
      subject: 'English',
      date: '2026-06-10',
      totalMarks: 50,
    },
  ];

  return (
    <>
      <div style={{ padding: '24px', background: '#fff', minHeight: '360px' }}>
        <h2>Exam & Assessment Engine</h2>
        <div style={{ marginBottom: '16px' }}>
          <Button type="primary">Schedule New Exam</Button>
          <Button style={{ marginLeft: '8px' }}>Import Exams</Button>
          <Button style={{ marginLeft: '8px' }}>AI Question Paper Generator</Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10 }}
          rowKey="key"
        />

        <div style={{ marginTop: '24px' }}>
          <Card title="Exam Statistics" bordered={false} style={{ marginBottom: '16px' }}>
            <Descriptions column={4}>
              <Descriptions.Item label="Total Exams This Month">12</Descriptions.Item>
              <Descriptions.Item label="Exams Pending Grading">3</Descriptions.Item>
              <Descriptions.Item label="Average Score">78%</Descriptions.Item>
              <Descriptions.Item label="AI Generated Papers">5</Descriptions.Item>
            </Descriptions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ExamPage;