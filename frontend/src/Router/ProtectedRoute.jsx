import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const accessToken = localStorage.getItem('accesstoken');

  if (accessToken) {
    return <React.Fragment>{children}</React.Fragment>;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default ProtectedRoute;