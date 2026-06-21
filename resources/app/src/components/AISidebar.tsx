import React from 'react';
import { Button, Divider } from 'antd';
import {
  QuestionCircleOutlined,
  RocketOutlined,
  CodeSandboxOutlined,
  ApiOutlined,
  HeartOutlined,
  ReadOutlined,
} from '@ant-design/icons';

const AISidebar: React.FC = () => {
  return (
    <div className="ai-sidebar">
      <div style={{ padding: 16, background: '#f0f2f5', borderRadius: 8, marginBottom: 16 }}>
        <h3 style={{ margin: 0 }}>AI Assistant</h3>
        <p style={{ marginTop: 8, marginRight: 0, marginBottom: 0, marginLeft: 0, fontSize: 14, color: 'rgba(0,0,0,0.65)' }}>
          Powered by AI Tunnel
        </p>
      </div>
      <Divider />
      <div style={{ padding: '0 16px 16px' }}>
        <Button block icon={<QuestionCircleOutlined />} size="small">
          Ask AI
        </Button>
        <Button block icon={<RocketOutlined />} size="small" style={{ marginTop: 8 }}>
          Generate Content
        </Button>
        <Button block icon={<CodeSandboxOutlined />} size="small" style={{ marginTop: 8 }}>
          Code Assistant
        </Button>
        <Button block icon={<ApiOutlined />} size="small" style={{ marginTop: 8 }}>
          AI Tunnel Config
        </Button>
        <Button block icon={<HeartOutlined />} size="small" style={{ marginTop: 8 }}>
          Wellbeing Tips
        </Button>
        <Button block icon={<ReadOutlined />} size="small" style={{ marginTop: 8 }}>
          Study Buddy
        </Button>
      </div>
    </div>
  );
};

export default AISidebar;