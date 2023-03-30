// import React from 'react'
import './Logout.css'
import LogoutIcon from '@mui/icons-material/Logout';
// import { axiosClient } from '../Api/axiosClient';
import axios from 'axios';
import React from 'react'
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';


import { axiosClient } from '../Api/axiosClient';
// import { axiosClient } from '../Api/axiosClient';

const Logout = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const removeItem = (item) => {
    localStorage.removeItem(item);
  };
  const token = localStorage.getItem("accesstoken");

  const handleLogout = async () => {
    try {
      await axiosClient.post(
        '/v1/auth/logout',
        {},
        {
          headers: { token: `Bearer ${token}`},
        }
      );
      removeItem("accessToken");
      removeItem("userId");
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='logout'>
      <LogoutIcon style={{marginTop: "5px", marginLeft: "16px"}} onClick={handleLogout}/>
      {/* <p >Log out</p> */}
    </div>
  )
}

export default Logout



// const Logout = () => {

//   const navigate = useNavigate()

//   const handleLogout=()=>{
//     localStorage.removeItem('token');
//     navigate('/')
//   }
//   return (
//     <div className='logout'>
//       <LogoutIcon style={{marginTop: "5px", marginLeft: "16px"}} onClick={handleLogout}/>
//     </div>
//   )
// }

// export default Logout





