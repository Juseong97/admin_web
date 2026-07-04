import {loginResolver} from "@/services/login/loginResolver.ts";
import type {Member} from "@/types/member/member.ts";
import {publicApiClient} from "@/services/api/publicApiClient.ts";


const authService = () =>{

    /*로그인*/
    const login = async function (users : Member) {
        const checkLoginReq = loginResolver(users);
        if(checkLoginReq?.type ==='success'){
            const membersList = await publicApiClient().get("/membersInfo")
                .then((response) => {
                    console.log("통신 성공 : ", response);
                    return response;
                }).catch((error) => {
                    console.log("에러 발생 : ", error);
                    return
                });

            console.log(membersList);
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