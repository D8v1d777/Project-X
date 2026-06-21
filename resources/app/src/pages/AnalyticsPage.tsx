import React from 'react';
import { Card, Row, Col, Statistic, Descriptions, Tag, Space, Button } from 'antd';
import { BarChartOutlined, CalendarOutlined, FileTextOutlined, UsergroupAddOutlined, SafetyCertificateOutlined, SolutionOutlined, DollarOutlined } from '@ant-design/icons';

const AnalyticsPage: React.FC = () => {
  return (
    <>
      <div style={{ padding: '24px', background: '#fff', minHeight: '360px' }}>
        <h2>Analytics & Reports Dashboard</h2>
        <div style={{ marginBottom: '16px' }}>
          <Button type="primary">Create Custom Report</Button>
          <Button style={{ marginLeft: '8px' }}>View Scheduled Reports</Button>
          <Button style={{ marginLeft: '8px' }}>AI Natural Language Query</Button>
        </div>
        <Row gutter={16}>
          <Col span={6}>
            <Statistic title="Student Performance Index" value="8.2" precision={1} suffix={<BarChartOutlined />} />
          </Col>
          <Col span={6}>
            <Statistic title="Attendance Trend" value="+5%" precision={0} suffix={<UsergroupAddOutlined />} />
          </Col>
          <Col span={6}>
            <Statistic title="Fee Collection Forecast" value="$150K" precision={0} suffix={<DollarOutlined />} />
          </Col>
          <Col span={6}>
            <Statistic title="Resource Utilization" value="78%" precision={0} suffix={<SafetyCertificateOutlined />} />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Recent Reports" bordered={false} style={{ marginBottom: '16px' }}>
              <Descriptions column={3}>
                <Descriptions.Item label="Monthly Performance">Generated 2026-06-20</Descriptions.Item>
                <Descriptions.Item label="Attendance Analysis">Generated 2026-06-21</Descriptions.Item>
                <Descriptions.Item label="Financial Summary">Generated 2026-06-19</Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Quick Insights" bordered={false} style={{ marginBottom: '16px' }}>
              <Row gutter={16}>
                <Col span={8}>
                  <div style={{ textAlign: 'center' }}>
                    <Statistic value="92%" precision={0} title="Exam Pass Rate" />
                    <div style={{ fontSize: 12, color: 'rgba(0,0,0,0.45)', marginTop: '4px' }}>
                      Up from 89% last term
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div style={{ textAlign: 'center' }}>
                    <Statistic value="4.5" precision={1} title="Avg. Teacher Rating" />
                    <div style={{ fontSize: 12, color: 'rgba(0,0,0,0.45)', marginTop: '4px' }}>
                      Excellent
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div style={{ textAlign: 'center' }}>
                    <Statistic value="15" precision={0} title="At-Risk Students" />
                    <div style={{ fontSize: 12, color: 'rgba(0,0,0,0.45)', marginTop: '4px' }}>
                      Requires intervention
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

export default AnalyticsPage;