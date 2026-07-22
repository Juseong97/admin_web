import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginLayout from "@/layouts/LoginLayout.tsx";
import Login from "@/pages/auth/Login.tsx";
import SignUp from "@/pages/auth/SignUp.tsx";
import MainPage from "@/pages/main/MainPage.tsx";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace/>}/>
                <Route element={<LoginLayout/>}>
                    {/*로그인 페이지*/}
                    <Route path="/login" element={<Login />}/>
                    {/*회원가입 페이지*/}
                    <Route path="/register" element={<SignUp/>}/>
                    {/*메인페이지*/}
                    <Route path="/main" element={<MainPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}