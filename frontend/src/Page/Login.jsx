import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
import { axiosClient } from '../Api/axiosClient';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'bootstrap';

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    login(data.username, data.password);
  };
  const login = async (username, password) => {
    await axiosClient.post('v1/auth/login', { username, password }).then((res) => {
      console.log(res.data);
      localStorage.setItem('accesstoken', res.data.accessToken);
      localStorage.setItem('userid', res.data._id);
      localStorage.setItem('isadmin', res.data.isAdmin);
      // navigate('/dashboard')
      if (!!res.data.isAdmin) {
        navigate('/member');
      } else {
        navigate('/about');
      }
    });
  };
  return (
    <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>User name</label>
            <input type="text" className="form-control mt-1" placeholder="Enter username" {...register('username')} />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              {...register('password', { required: true })}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="but-login">
              Sign in
            </button>
          </div>
          <div>
            <p className="regis-link">
              Don't have an account?{' '}
              <NavLink to="/register" style={{ textDecoration: 'none', color: '#000' }}>
                Register
              </NavLink>
            </p>
          </div>
        </div>
    </form>
  </div>
  );
};

export default Login;
