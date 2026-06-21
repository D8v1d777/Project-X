import React from 'react';
import { Card, Row, Col, Table, Tag, Space, Button } from 'antd';
import { BookOutlined, CalendarOutlined, FileTextOutlined, SwapOutlined } from '@ant-design/icons';

const AcademicPage: React.FC = () => {
  const columns = [
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'Class',
      dataIndex: 'class',
      key: 'class',
    },
    {
      title: 'Teacher',
      dataIndex: 'teacher',
      key: 'teacher',
    },
    {
      title: 'Schedule',
      dataIndex: 'schedule',
      key: 'schedule',
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
      subject: 'Mathematics',
      class: 'Grade 10A',
      teacher: 'Mr. Smith',
      schedule: 'Mon-Fri, 10:00-11:00',
    },
    {
      key: '2',
      subject: 'Science',
      class: 'Grade 10B',
      teacher: 'Ms. Jones',
      schedule: 'Tue-Thu, 14:00-15:00',
    },
    {
      key: '3',
      subject: 'English',
      class: 'Grade 9A',
      teacher: 'Mr. Lee',
      schedule: 'Mon, Wed, Fri, 09:00-10:00',
    },
  ];

  return (
    <>
      <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        <h2>Academic Management</h2>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary">Add Timetable</Button>
          <Button style={{ marginLeft: 8 }}>Generate AI Timetable</Button>
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

export default AcademicPage;