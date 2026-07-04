import type {LoginRequest} from "@/services/login/login.ts";
import {checkEmailFormat, isEmpty} from "@/utils/cmmnUtils.ts";

interface ValidationResult {
    type : 'success' | 'error';
    message : string;
}

// 로그인 검증
export const loginResolver = (values : LoginRequest) : ValidationResult => {
    // 이메일 빈값 검증
    if (isEmpty(values.email)) {
        return {type: 'error', "message": "이메일이 입력 되지 않았습니다."};
    }

    // 이메일 포맷 검증
    if (!checkEmailFormat(values.email)) {
        return {type: 'error', "message": "이메일 양식이 옳바르지 않습니다."};
    }

    // 패스워드 빈값 검증
    if (isEmpty(values.password)) {
        return {type: 'error', "message": "패스워드가 입력 되지 않았습니다."};
    }

    // 패스워드 최소 자릿수 검증
    if (values.password.length > 7) {
        return {type: 'error', "message": "최소 8자리 이상의 패스워드를 입력해주세요."};
    }

    return {type: 'success', "message": ""};
}
