import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({ children }) => {
  const accessToken = localStorage.getItem('accesstoken');

  if (!accessToken) {
    return <React.Fragment>{children}</React.Fragment>;
  } else {
    return <Navigate to="/about" replace />;
  }
};

export default AuthRoute;