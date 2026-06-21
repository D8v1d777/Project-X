import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
// Import placeholder pages for each module
import DashboardPage from './pages/DashboardPage';
import SISPage from './pages/SISPage';
import AcademicPage from './pages/AcademicPage';
import StaffPage from './pages/StaffPage';
import AttendancePage from './pages/AttendancePage';
import ExamPage from './pages/ExamPage';
import LibraryPage from './pages/LibraryPage';
import FinancePage from './pages/FinancePage';
import ParentPage from './pages/ParentPage';
import CommunicationsPage from './pages/CommunicationsPage';
import TransportPage from './pages/TransportPage';
import HealthPage from './pages/HealthPage';
import ResourcesPage from './pages/ResourcesPage';
import AnalyticsPage from './pages/AnalyticsPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<PrivateRoute />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/sis" element={<SISPage />} />
            <Route path="/academic" element={<AcademicPage />} />
            <Route path="/staff" element={<StaffPage />} />
            <Route path="/attendance" element={<AttendancePage />} />
            <Route path="/exam" element={<ExamPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/finance" element={<FinancePage />} />
            <Route path="/parent" element={<ParentPage />} />
            <Route path="/communications" element={<CommunicationsPage />} />
            <Route path="/transport" element={<TransportPage />} />
            <Route path="/health" element={<HealthPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;