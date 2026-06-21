import React from 'react';
import { Card, Row, Col, Table, Tag, Space, Button, Descriptions, Statistic } from 'antd';
import { AppstoreOutlined, CalendarOutlined, BookOutlined, FileTextOutlined, SwapOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

const LibraryPage: React.FC = () => {
  const columns = [
    {
      title: 'Book Title',
      dataIndex: 'title',
      key: 'title',
      width: 250,
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
      width: 150,
    },
    {
      title: 'ISBN',
      dataIndex: 'isbn',
      key: 'isbn',
      width: 120,
    },
    {
      title: 'Genre',
      dataIndex: 'genre',
      key: 'genre',
      width: 100,
    },
    {
      title: 'Available Copies',
      dataIndex: 'availableCopies',
      key: 'availableCopies',
      width: 100,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Space>
          <Button type="link">View</Button>
          <Button type="link">Edit</Button>
          <Button type="link">Checkout</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      title: 'Introduction to Algorithms',
      author: 'Thomas H. Cormen',
      isbn: '978-0262046305',
      genre: 'Computer Science',
      availableCopies: 5,
    },
    {
      key: '2',
      title: 'Clean Code',
      author: 'Robert C. Martin',
      isbn: '978-0132350884',
      genre: 'Software Engineering',
      availableCopies: 3,
    },
    {
      key: '3',
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt, David Thomas',
      isbn: '978-0201616224',
      genre: 'Software Engineering',
      availableCopies: 2,
    },
  ];

  return (
    <>
      <div style={{ padding: '24px', background: '#fff', minHeight: '360px' }}>
        <h2>Library Management System</h2>
        <div style={{ marginBottom: '16px' }}>
          <Button type="primary">Add New Book</Button>
          <Button style={{ marginLeft: '8px' }}>Import Books</Button>
          <Button style={{ marginLeft: '8px' }}>AI Book Recommender</Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10 }}
          rowKey="key"
        />

        <div style={{ marginTop: '24px' }}>
          <Card title="Library Statistics" bordered={false} style={{ marginBottom: '16px' }}>
            <Descriptions column={4}>
              <Descriptions.Item label="Total Books">2,450</Descriptions.Item>
              <Descriptions.Item label="Available Copies">1,890</Descriptions.Item>
              <Descriptions.Item label="Total Checkouts">5,430</Descriptions.Item>
              <Descriptions.Item label="Overdue Books">45</Descriptions.Item>
            </Descriptions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LibraryPage;