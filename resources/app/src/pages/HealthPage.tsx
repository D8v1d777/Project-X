import React from 'react';
import { Card, Row, Col, Table, Tag, Space, Button, Descriptions, Statistic } from 'antd';
import { FundOutlined, CalendarOutlined, FileTextOutlined, UsergroupAddOutlined, SafetyCertificateOutlined, SolutionOutlined } from '@ant-design/icons';

const HealthPage: React.FC = () => {
  const columns = [
    {
      title: 'Student Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Visit Date',
      dataIndex: 'visitDate',
      key: 'visitDate',
    },
    {
      title: 'Symptoms',
      dataIndex: 'symptoms',
      key: 'symptoms',
    },
    {
      title: 'Treatment',
      dataIndex: 'treatment',
      key: 'treatment',
    },
    {
      title: 'Follow-up',
      dataIndex: 'followUp',
      key: 'followUp',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Doe',
      visitDate: '2026-06-20',
      symptoms: 'Fever, Headache',
      treatment: 'Paracetamol, Rest',
      followUp: '2026-06-22',
    },
    {
      key: '2',
      name: 'Jane Smith',
      visitDate: '2026-06-21',
      symptoms: 'Stomach Ache',
      treatment: 'ORS, Diet',
      followUp: '2026-06-23',
    },
  ];

  return (
    <>
      <div style={{ padding: '24px', background: '#fff', minHeight: '360px' }}>
        <h2>Health & Medical Records</h2>
        <div style={{ marginBottom: '16px' }}>
          <Button type="primary">Add Visit Record</Button>
          <Button style={{ marginLeft: '8px' }}>Import Records</Button>
          <Button style={{ marginLeft: '8px' }}>AI Outbreak Detector</Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10 }}
          rowKey="key"
        />

        <div style={{ marginTop: '24px' }}>
          <Card title="Health Statistics" bordered={false} style={{ marginBottom: '16px' }}>
            <Descriptions column={4}>
              <Descriptions.Item label="Infirmary Visits Today">12</Descriptions.Item>
              <Descriptions.Item label="Students Sent Home">3</Descriptions.Item>
              <Descriptions.Item label="Vaccinations Due">45</Descriptions.Item>
              <Descriptions.Item label="AI Outbreak Alerts">0</Descriptions.Item>
            </Descriptions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default HealthPage;