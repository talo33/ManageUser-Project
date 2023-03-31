import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './SideBar.css';
import Logout from './Logout';


const SideBar = () => {
    const MenuItem = [
        {
          path: '/timeadmin',
          name: 'Weather',
          icon: <WbSunnyIcon/>
        },
    
        {
          path: '/member',
          name: 'Manage user',
          icon: <PersonIcon />
        }
    
        // {
        //     path: "/about",
        //     name: "About",
        //     icon: <InfoIcon/>
        // },
      ];

      const [isopen, setIsopen] = useState(false);
      const toggle = () => setIsopen(!isopen);
    

    return (      
        <div className="containers">
            <div style={{ width: isopen ? '200px' : '50px' }} className="sidebar">
                <div className="top_section">
                <h1 style={{ display: isopen ? 'block' : 'none' }} className="logo">
                    Manage
                </h1>
                <div style={{ marginLeft: isopen ? '50px' : '0px' }} className="bars">
                    <MenuIcon onClick={toggle} />
                </div>
            </div>
                {MenuItem.map((item, index) => (
                    <Link style={{ textDecoration: 'none' }} to={item.path} key={index} className="link" >
                    <div className="icon">{item.icon}</div>
                    <div style={{ display: isopen ? 'block' : 'none' }} className="link_text">
                        {item.name}
                    </div>
                    </Link>
                ))}
            <Logout />
            </div>
        </div>
  );
};

export default SideBar
