import React from 'react';
import { Card, Row, Col, Table, Tag, Space, Button, Statistic, Descriptions, Tabs } from 'antd';
import { BellOutlined, CalendarOutlined, UsergroupAddOutlined, FileTextOutlined, ExclamationCircleOutlined, SafetyCertificateOutlined, BarChartOutlined } from '@ant-design/icons';

const AttendancePage: React.FC = () => {
  const tabList = [
    { key: 'today', tab: <span><BellOutlined /> Today</span> },
    { key: 'weekly', tab: <span><CalendarOutlined /> Weekly</span> },
    { key: 'monthly', tab: <span><UsergroupAddOutlined /> Monthly</span> },
    { key: 'reports', tab: <span><BarChartOutlined /> Reports</span> },
  ];

  const columns = [
    {
      title: 'Student Name',
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
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status: string) => {
        let color = 'default';
        if (status === 'Present') color = 'green';
        else if (status === 'Absent') color = 'red';
        else if (status === 'Late') color = 'orange';
        else if (status === 'Excused') color = 'blue';
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: 'Method',
      dataIndex: 'method',
      key: 'method',
      width: 120,
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      width: 100,
    },
    {
      title: 'Confidence',
      dataIndex: 'confidence',
      key: 'confidence',
      width: 100,
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Doe',
      class: 'Grade 10A',
      status: 'Present',
      method: 'Facial Recognition',
      time: '08:15',
      confidence: '98%',
    },
    {
      key: '2',
      name: 'Jane Smith',
      class: 'Grade 10B',
      status: 'Present',
      method: 'Facial Recognition',
      time: '08:16',
      confidence: '95%',
    },
    {
      key: '3',
      name: 'Bob Johnson',
      class: 'Grade 11A',
      status: 'Late',
      method: 'Manual',
      time: '08:45',
      confidence: '100%',
    },
    {
      key: '4',
      name: 'Alice Brown',
      class: 'Grade 9A',
      status: 'Absent',
      method: 'Facial Recognition',
      time: '08:17',
      confidence: '0%',
    },
  ];

  return (
    <>
      <div style={{ padding: '24px', background: '#fff', minHeight: '360px' }}>
        <h2>Smart Attendance System</h2>
        <div style={{ marginBottom: '16px' }}>
          <Button type="primary">Mark Attendance</Button>
          <Button style={{ marginLeft: '8px' }}>Import Attendance</Button>
          <Button style={{ marginLeft: '8px' }}>View Reports</Button>
        </div>
        <Tabs defaultActiveKey="today" items={tabList} />
        <div style={{ padding: '16px', background: '#f9f9f9', borderRadius: '8px' }}>
          <Row gutter={16}>
            <Col span={6}>
              <Statistic title="Today's Attendance" value="95%" precision={0} suffix={<BellOutlined />} />
            </Col>
            <Col span={6}>
              <Statistic title="Present Students" value="1,183" precision={0} suffix={<UsergroupAddOutlined />} />
            </Col>
            <Col span={6}>
              <Statistic title="Absent Students" value="62" precision={0} suffix={<ExclamationCircleOutlined />} />
            </Col>
            <Col span={6}>
              <Statistic title="Late Arrivals" value="28" precision={0} suffix={<SafetyCertificateOutlined />} />
            </Col>
          </Row>
          <div style={{ marginTop: '16px' }}>
            <Table
              columns={columns}
              dataSource={data}
              pagination={{ pageSize: 10 }}
              rowKey="key"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendancePage;