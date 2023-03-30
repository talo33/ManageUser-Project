import React  from "react";
import {BrowserRouter, Routes, Route, useNavigate, Navigate} from "react-router-dom"
import SideBar from "../Component/SideBar";




export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/admin" element={
                localStorage.getItem("accessToken") ? <Admin/> : <Navigate to="/"/>} />
            <Route path = "/" element={<Login/>}/>
            </Routes>
        </BrowserRouter> 
    )
}

function Admin() {
    let history = useNavigate()
    let logout = () => {
        localStorage.removeItem("accessToken" )
        history('/', {replace: true});
    }
    return (
    <div> 
        <h2>Admin</h2>
        {/* <SideBar/> */}
        <button onClick={logout}>Log out</button>
    </div>
    )
}

function Login() {
    let history = useNavigate()
    let login = () => {
        localStorage.setItem("accessToken", true)
        history("/admin")
    }
    return (

    <div> 
        <h2>Login</h2>
        <button onClick={login}>Login</button>
    </div>
    )
}