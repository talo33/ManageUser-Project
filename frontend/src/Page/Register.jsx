import React from 'react'
import './Register.css'
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css"
import { axiosClient } from '../Api/axiosClient';
import *as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';


const schema = yup.object({
  email: yup.string().email().required(),
  username: yup.string().min(6).required(),
  password: yup.string().min(6).required(),
  phone: yup.string().min(10).required(),
}).required();

const Register = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
    });
    const onSubmit = async(data) => {
      await axiosClient.post('v1/auth/register', {
        username: data.username, 
        email: data.email, 
        phone: data.phone,
        password: data.password}).then(()=>{navigate('/')})
    }
    
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
          </div>
          <div className="form-group mt-3">
            <label>User name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter user name"
              {...register("username")}
            />
            <p>{errors.username?.message}</p>
          </div>
          <div className="form-group mt-3">
            <label>Number phone</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter number phone"
              {...register("phone")}
            />
            <p>{errors.phone?.message}</p>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              {...register("password", { required: true })}
            />
            <p>{errors.password?.message}</p>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn-resgister">
              Register
            </button>
          </div>
          
        </div>
      </form>
    </div>
  )
}

export default Register
