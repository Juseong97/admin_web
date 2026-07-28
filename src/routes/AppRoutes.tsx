import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginLayout from "@/layouts/LoginLayout.tsx";
import Login from "@/pages/auth/Login.tsx";
import SignUp from "@/pages/auth/SignUp.tsx";
import MenuSettings from "@/pages/admin/MenuSettings.tsx";
import AdminLayout from "@/layouts/AdminLayout.tsx";
import UserInfoSettings from "@/pages/admin/UserInfoSettings.tsx";
import AuthorSettings from "@/pages/admin/AuthorSettings.tsx";

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
                    <Route path="/main" element={<MenuSettings/>}/>
                </Route>

                <Route path="/admin" element={<AdminLayout/>}>
                    {/*사용자정보*/}
                    <Route path="/admin/userInfoSettings" element={<UserInfoSettings/>}/>
                    {/*메뉴관리*/}
                    <Route path="/admin/menuSettings" element={<MenuSettings/>}/>
                    {/*권한관리*/}
                    <Route path="/admin/authorSettings" element={<AuthorSettings/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}