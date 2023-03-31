
import './Logout.css'
import LogoutIcon from '@mui/icons-material/Logout';


import React from 'react'

import { useNavigate } from 'react-router-dom';


import { axiosClient } from '../Api/axiosClient';
// import { axiosClient } from '../Api/axiosClient';

const Logout = () => {
  const navigate = useNavigate();
  // const userId = localStorage.getItem("userId");
  const removeItem = (item) => {
    localStorage.removeItem(item);
  };
  const token = localStorage.getItem('accesstoken');

  const handleLogout = async () => {
    try {
      await axiosClient.post(
        '/v1/auth/logout',
        {},
        {
          headers: { token: `Bearer ${token}`}
        }
      );
      removeItem('accesstoken');
      removeItem('userid');
      removeItem('isadmin');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="logout">
      <LogoutIcon style={{marginTop: "5px", marginLeft: "16px"}} onClick={() => handleLogout()}/>
    </div>
  )
}

export default Logout








