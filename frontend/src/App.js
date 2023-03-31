import './App.css';
// import SideBar from './Component/SideBar';
// import SideBar from './Component/SideBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashBoard from './Page/TimeAdmin';
import Member from './Page/Member';
import About from './Page/About';
import Login from './Page/Login';
import Register from './Page/Register';
import AboutTL from './Page/Weather';
// import Router from './Router/Router';
import ProtectedRoute from './Router/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import TimeAdmin from './Page/TimeAdmin';
import AdminRoute from './Router/AdminRoute';
import AuthRoute from './Router/AuthRoute';

// import Router from './Router/Router';



function App() {
  return (
    <div >      
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Navigate to='/'/>} />
          <Route path="/" element={ <AuthRoute><Login /></AuthRoute>} />
          <Route
            path="/register"
            element={localStorage.getItem('accesstoken') ? <Navigate to="/about" /> : <Register />}
          />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/member" element={ <AdminRoute>
                <Member    />
              </AdminRoute> } />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/aboutTL"
            element={
              <ProtectedRoute>
                <AboutTL />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      <div >      
      {/* <BrowserRouter>  
           <Routes> 
            <Route path ="/" element={<Login/>}/>
            <Route path = "/register" element={<Register/>}/>
            
            <Route path = "/timeadmin" element={<TimeAdmin/>}/>
            <Route path = "/member" element={<Member/>}/>
            <Route path = "/about" element={<About/>}/> 
            <Route path = "/time" element={<AboutTL/>}/> 
          </Routes>
      </BrowserRouter> */}
      
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
      <ToastContainer />
    </div>
    </div>
  );
}

export default App;
