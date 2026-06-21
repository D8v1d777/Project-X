import React from 'react';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  DashboardOutlined,
  BookOutlined,
  UsergroupAddOutlined,
  BellOutlined,
  FileTextOutlined,
  DollarOutlined,
  UserOutlined,
  WechatOutlined,
  SwapOutlined,
  FundOutlined,
  BarChartOutlined,
  SettingOutlined,
  MedicineBoxOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import AISidebar from './AISidebar';

const { Header, Sider, Content } = Layout;

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'dashboard': return <DashboardOutlined />;
      case 'sis': return <UsergroupAddOutlined />;
      case 'academic': return <BookOutlined />;
      case 'staff': return <UserOutlined />;
      case 'attendance': return <BellOutlined />;
      case 'exam': return <FileTextOutlined />;
      case 'library': return <AppstoreOutlined />;
      case 'finance': return <DollarOutlined />;
      case 'parent': return <WechatOutlined />;
      case 'communications': return <SwapOutlined />;
      case 'transport': return <FundOutlined />;
      case 'health': return <MedicineBoxOutlined />;
      case 'resources': return <BarChartOutlined />;
      case 'analytics': return <BarChartOutlined />;
      case 'admin': return <SettingOutlined />;
      default: return <DashboardOutlined />;
    }
  };

  const menuItems = [
    { key: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { key: '/sis', label: 'Student Info', icon: 'sis' },
    { key: '/academic', label: 'Academic', icon: 'academic' },
    { key: '/staff', label: 'Staff', icon: 'staff' },
    { key: '/attendance', label: 'Attendance', icon: 'attendance' },
    { key: '/exam', label: 'Exam', icon: 'exam' },
    { key: '/library', label: 'Library', icon: 'library' },
    { key: '/finance', label: 'Finance', icon: 'finance' },
    { key: '/parent', label: 'Parent Portal', icon: 'parent' },
    { key: '/communications', label: 'Communications', icon: 'communications' },
    { key: '/transport', label: 'Transport', icon: 'transport' },
    { key: '/health', label: 'Health', icon: 'health' },
    { key: '/resources', label: 'Resources', icon: 'resources' },
    { key: '/analytics', label: 'Analytics', icon: 'analytics' },
    { key: '/admin', label: 'Admin', icon: 'admin' },
  ];

  return (
    <Layout>
      <Sider collapsible collapsedWidth="0">
        <div className="logo" />
        <Menu theme="dark" mode="inline" selectedKeys={[pathname]}>
          {menuItems.map(item => (
            <Menu.Item key={item.key} icon={getIcon(item.icon)}>
              <Link to={item.key}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0, borderBottom: '1px solid #eee' }} />
        <Content style={{ margin: '24px 16px 0', padding: 24, background: '#fff', minHeight: 360 }}>
          {children}
        </Content>
      </Layout>
      <Sider width={260} style={{ background: '#f0f2f5', borderLeft: '1px solid #eee' }}>
        <AISidebar />
      </Sider>
    </Layout>
  );
};

export default LayoutComponent;
