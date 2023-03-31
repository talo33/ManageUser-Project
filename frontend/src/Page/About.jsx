// import React from 'react'
// import SideBar from '../Component/SideBar'
// import SideBarUser from '../Component/SideBarUser'
import './About.css';
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
import { useForm } from 'react-hook-form';
import { axiosClient } from '../Api/axiosClient';
import SideBarUser from '../Component/SideBarUser';
import SouthIcon from '@mui/icons-material/South';
import PersonPinIcon from '@mui/icons-material/PersonPin';
function About() {
  const { register, handleSubmit } = useForm();
  const [userInfo, setUserInfo] = useState([]);
  const [error, setError] = useState();
  const token = localStorage.getItem('accesstoken');
  const id = localStorage.getItem('userid');
  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/v1/user/${id}/`, {
        headers: {
          token: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      setUserInfo(response.data);
      
    } catch (error) {
      if (error.response.status === 401) {
        setError('Authentication failed. Please log in again.');
      } else {
        setError('An error occurred. Please try again later.');
      }
    }
  };
  
  useEffect(() => {
    fetchUserInfo();
  }, []);

  if (error) {
    return (
      <>
        <SideBarUser />
        <div>{error}</div>
      </>
    );
  }

  const onSubmit = (data )=> {
    localStorage.getItem('userid');
    axiosClient.put(
      `v1/user/${id}/update/`,
      { email: data.email, phone: data.phone },
      { headers: { token: `Bearer ${token}` } }
    ).then(()=>{fetchUserInfo()});
  };
  

  return (
    <div className="About-page">
      <SideBarUser />
      {!userInfo ? (
        'Loading'
      ) : (
        <div className="info-user">
          <div className="in-info-user">
            <h1 className="welcome">Welcome {userInfo.username}</h1>
            <hr style={{ margin: '0 25% 20px 25%', width: '50%', color: "#fff" }} />
            <PersonPinIcon style={{ fontSize: '50px', margin: '0 46.5% 0px 46.5%', color: "#fff"}} />
            <div className="discus-info">
              <div className="in-discus-info">
                <p>Name: {userInfo.username}</p>
                <p>Email {userInfo.email}</p>
                <p>Phone: {userInfo.phone}</p>
              </div>
            </div>
            <h3 className="welcome"style={{textAlign: "center", marginTop: "10px"}}>You can edit your  personal information here</h3>
            <SouthIcon style={{ fontSize: '50px', margin: '0 46.5% 0px 46.5%', color: "lightgray" }}/>
            <form className='form-update-info' onSubmit={handleSubmit(onSubmit)}>
              
              <TextField
                className = "textfield"
                variant="filled"
                id="email"
                placeholder="Enter email"
                label="email"
                margin='dense'
                fullWidth
                {...register('email')}
              />
              <TextField
                className = "textfield"
                variant="filled"
                id="phone"
                placeholder="Enter phone"
                label="phone"
                margin='dense'
                fullWidth
                {...register('phone')}
              />
              <button className="btn-up" type="submit">submit</button>         
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;