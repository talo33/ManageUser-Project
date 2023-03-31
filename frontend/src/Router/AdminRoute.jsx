import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const isadmin = localStorage.getItem('isadmin');

  if (isadmin === 'true') {
    return <React.Fragment>{children}</React.Fragment>;
  } else {
    return <Navigate to="/about" replace />;
  }
};

export default AdminRoute;