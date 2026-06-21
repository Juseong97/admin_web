import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginLayout from "@/layouts/LoginLayout.tsx";
import Login from "@/pages/login/Login.tsx";
import Register from "@/pages/login/Register.tsx";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace/>}/>
                <Route element={<LoginLayout/>}>
                    {/*로그인 페이지*/}
                    <Route path="/login" element={<Login />}/>
                    {/*회원가입 페이지*/}
                    <Route path="/register" element={<Register/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}