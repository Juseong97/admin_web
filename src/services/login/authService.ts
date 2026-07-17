import {loginResolver} from "@/services/login/loginResolver.ts";
import type {Member} from "@/types/member/member.ts";
import { publicApiClient, type publicRequestEntity } from "@/services/api/publicApiClient.ts";


const authService = () => {

    /*로그인*/
    const login = async function (users: Member) {
        const checkLoginReq = loginResolver(users);
        if (checkLoginReq?.type) {
            const request : publicRequestEntity = {
                reqUrl : '/mebersInfo',
                body : {
                    email : users.email,
                    password : users.password
                },
                queryString : {email : users.email}
            }
            const response = await publicApiClient.post(request);
            alert(response);
        }
        return {};
    }

    /*로그아웃*/
    const logOut = function () {

        return {};
    }

    /*회원가입*/
    const signUp = function () {

        return {};
    }

    /*아이디 찾기*/
    const searchId = function () {

        return {};
    }

    /*비밀번호 리셋*/
    const resetPassword = function () {

        return {};
    }

    /*토큰 검증*/
    const validateToken = function () {

    }


    return {
        login,
        logOut,
        signUp,
        searchId,
        resetPassword,
        validateToken,
    };
}

export default authService();