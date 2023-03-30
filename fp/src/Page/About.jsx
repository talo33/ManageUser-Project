// import React from 'react'
// import SideBar from '../Component/SideBar'
// import SideBarUser from '../Component/SideBarUser'
import './About.css'
// import WeatherApp from './test'

// const About = () => {
//   return (
//     <div className='About-page'>
//       <SideBarUser/>
//       {/* <WeatherApp/> */}
//     </div>
//   )
// }

// export default About
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';
import { useForm } from "react-hook-form";
import { axiosClient } from '../Api/axiosClient';
import SideBarUser from '../Component/SideBarUser';
import SouthIcon from '@mui/icons-material/South';
function About() {
  const { register, handleSubmit } = useForm();
  
  const [userInfo, setUserInfo] = useState([]);
  const [error, setError] = useState([]);
  const token = localStorage.getItem("accesstoken");
  const id = localStorage.getItem("userid");
  useEffect(() => {

    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/v1/user/${id}/`, {
          headers: {
            token: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        setUserInfo(response.data);
        setError(null);
      } catch (error) {
        if (error.response.status === 401) {
          setError('Authentication failed. Please log in again.');
        } else {
          setError('An error occurred. Please try again later.');
        }
      }
    };
    fetchUserInfo();
  }, [id, token]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  const onSubmit = data => {
    localStorage.getItem('userid');
    axiosClient.put(`v1/user/${id}/update/`, {username: data.username, email: data.email, phone: data.phone}, {headers: {token: `Bearer ${token}`}});
    console.log(data);
  }

  return (
    <div className='About-page'>
      <SideBarUser/>
      <div className='info-user'>
        <h1>Welcome {userInfo.username}</h1>
        <h2>Here is your information</h2>
        <hr style={{margin: "0 25% 20px 25%", width: "50%"}}/>
        <SouthIcon style={{fontSize: "50px", margin: "0 48.5% 20px 48.5%"}}/>
        <div className='discus-info'>
          <div className='in-discus-info'>
            <p>Username {userInfo.username}</p>
            <p>Email: {userInfo.email}</p>
            <p>Phone: {userInfo.phone}</p>
          </div>
        </div>
          
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField variant="outlined" id='name' placeholder='Enter name' label="name" fullWidth {...register("username")}/>
              <TextField variant="outlined" id='email' placeholder='Enter email' label="email" fullWidth {...register("email")}/>
              <TextField variant="outlined" id='phone' placeholder='Enter phone' label="phone" fullWidth {...register("phone")}/>
              <button
              type='submit'>submit</button>
            </form>
      </div>
    </div>
  );
}

export default About