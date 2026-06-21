import React from 'react';
import { Card, Row, Col, Statistic, Descriptions, Tag, Space } from 'antd';
import { DashboardOutlined, UsergroupAddOutlined, BellOutlined, DollarOutlined, BarChartOutlined, FundOutlined, BookOutlined, SwapOutlined } from '@ant-design/icons';

const DashboardPage: React.FC = () => {
  return (
    <>
      <div style={{ padding: '24px', background: '#fff', minHeight: '360px' }}>
        <h2>Dashboard</h2>
        <div style={{ margin: '24px 0' }}>
          <Row gutter={16}>
            <Col span={6}>
              <Statistic title="Total Students" value="1,245" precision={2} prefix={<UsergroupAddOutlined />} />
            </Col>
            <Col span={6}>
              <Statistic title="Today Attendance" value="98%" precision={2} suffix={<BellOutlined />} />
            </Col>
            <Col span={6}>
              <Statistic title="Fee Collection" value="$124,500" precision={0} prefix={<DollarOutlined />} />
            </Col>
            <Col span={6}>
              <Statistic title="Upcoming Exams" value="3" precision={0} suffix={<BarChartOutlined />} />
            </Col>
          </Row>
        </div>
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Recent Activities" bordered={false} style={{ marginBottom: '24px' }}>
              <Descriptions column={3}>
                <Descriptions.Item label="New enrollment">John Doe admitted to Grade 10</Descriptions.Item>
                <Descriptions.Item label="Fee payment">Received $500 from Smith Family</Descriptions.Item>
                <Descriptions.Item label="Exam scheduled">Math exam for Grade 9 on 2026-06-25</Descriptions.Item>
                <Descriptions.Item label="Library update">50 new books added to catalog</Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Quick Stats" bordered={false} style={{ marginBottom: '24px' }}>
              <Row gutter={16}>
                <Col span={8}>
                  <div style={{ textAlign: 'center' }}>
                    <Statistic value="85%" precision={0} title="Attendance Rate" />
                    <div style={{ fontSize: 12, color: 'rgba(0,0,0,0.45)', marginTop: '4px' }}>
                      Up from 82% last month
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div style={{ textAlign: 'center' }}>
                    <Statistic value="92%" precision={0} title="Fee Collection Rate" />
                    <div style={{ fontSize: 12, color: 'rgba(0,0,0,0.45)', marginTop: '4px' }}>
                      On track for target
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div style={{ textAlign: 'center' }}>
                    <Statistic value="4.2" precision={1} title="Avg. Grade" />
                    <div style={{ fontSize: 12, color: 'rgba(0,0,0,0.45)', marginTop: '4px' }}>
                      Slight improvement
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DashboardPage;