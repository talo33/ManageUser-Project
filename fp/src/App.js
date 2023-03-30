import './App.css';
// import SideBar from './Component/SideBar';
// import SideBar from './Component/SideBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import DashBoard from './Page/DashBoard';
import Member from './Page/Member';
import About from './Page/About';
import Login from './Page/Login';
import Register from './Page/Register';
import AboutTL from './Page/AboutTL';
import Router from './Router/Router';


// import Router from './Router/Router';



function App() {
  return (
    <div >      
      <BrowserRouter>  
           <Routes> 
            <Route path ="/" element={<Login/>}/>
            <Route path = "/register" element={<Register/>}/>
            
            <Route path = "/dashboard" element={<DashBoard/>}/>
            <Route path = "/member" element={<Member/>}/>
            <Route path = "/about" element={<About/>}/> 
            <Route path = "/aboutTL" element={<AboutTL/>}/> 
          </Routes>
      </BrowserRouter>
      
      {/* <Router/> */}
    </div>
  );
}

export default App;
