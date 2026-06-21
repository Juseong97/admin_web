import type {LoginRequest} from "@/types/member/member.ts";
import {cmmnUtils}  from "@/utils/cmmnUtils.ts";

export const loginResolver = (values : LoginRequest) => {

    const checkEmail = () => {
        console.log(values.email);
        if(!cmmnUtils().isEmpty(values.email)){
            return {type : 'error', "message" : "이메일이 입력 되지 않았습니다."};
        } else if(!cmmnUtils().checkEmail(values.email)) {
            return {type : 'error', "message" : "이메일 양식이 옳바르지 않습니다."};
        }
        return null;
    }

    const checkPassword = () => {
        if(!cmmnUtils().isEmpty(values.password)){
            return {type : 'error', "message" : "패스워드가 입력 되지 않았습니다."};
        } else if(values.password.length > 7) {
            return {type : 'error', "message" : "최소 8자리 이상의 패스워드를 입력해주세요."};
        }
        return null;
    }

    const checkEmailResult = checkEmail();
    const checkPasswordResult = checkPassword();

    return ! checkEmailResult ? checkEmailResult : !checkPasswordResult ? checkPasswordResult : {type : 'success', "message" : ""};
}