import { Navigate, Outlet } from 'react-router-dom';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute: React.FC = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const navigate = useNavigate();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;