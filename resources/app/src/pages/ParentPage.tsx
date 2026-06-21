import React from 'react';
import { Card, Row, Col, Table, Tag, Space, Button, Statistic, Descriptions } from 'antd';
import { WechatOutlined, CalendarOutlined, FileTextOutlined, UsergroupAddOutlined, SafetyCertificateOutlined, SolutionOutlined } from '@ant-design/icons';

const ParentPage: React.FC = () => {
  return (
    <>
      <div style={{ padding: '24px', background: '#fff', minHeight: '360px' }}>
        <h2>Parent & Guardian Portal</h2>
        <div style={{ marginBottom: '16px' }}>
          <Button type="primary">View Child Profile</Button>
          <Button style={{ marginLeft: '8px' }}>Pay Fees</Button>
          <Button style={{ marginLeft: '8px' }}>Message Teacher</Button>
        </div>
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Child Overview" bordered={false} style={{ marginBottom: '16px' }}>
              <Descriptions column={3}>
                <Descriptions.Item label="Student Name">John Doe</Descriptions.Item>
                <Descriptions.Item label="Class">Grade 10A</Descriptions.Item>
                <Descriptions.Item label="Attendance Rate">95%</Descriptions.Item>
                <Descriptions.Item label="Fee Status">Paid Up-to-date</Descriptions.Item>
                <Descriptions.Item label="Latest Exam Score">85%</Descriptions.Item>
                <Descriptions.Item label="Library Books Issued">3</Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Recent Activities" bordered={false} style={{ marginBottom: '16px' }}>
              <Descriptions column={3}>
                <Descriptions.Item label="Fee Payment">Received $500 on 2026-06-20</Descriptions.Item>
                <Descriptions.Item label="Attendance">Present on 2026-06-21</Descriptions.Item>
                <Descriptions.Item label="Message from Teacher">Good progress in Mathematics</Descriptions.Item>
                <Descriptions.Item label="Library Book Issued">Introduction to Algorithms</Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ParentPage;