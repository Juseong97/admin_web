import type {signUpRequest} from "@/services/auth/auth.ts";
import {loginResolver} from "@/services/auth/loginResolver.ts";
import type {ValidationResult} from "@/types/common/baseEntity.ts";
import {isEmpty} from "@/utils/cmmnUtils.ts";

export const signUpResolver = (values: signUpRequest): ValidationResult => {
    const validationResult: ValidationResult = loginResolver({
        email: values.email,
        password: values.password,
    });

    // 아이디, 비밀번호 검증 (로그인 함수 재사용)
    if (!validationResult.type) {
        return validationResult;
    }

    if (isEmpty(values.memberId)) {
        return {type: false, message: '아이디는 필수 입력값 입니다.', target : 'memberId'};
    }

    if (isEmpty(values.name)) {
        return {type: false, message: '이름은 필수 입력값 입니다.', target : 'name'};
    }

    if (values.password !== values.rePassword) {
        return {type: false, message : '입력한 비밀번호가 서로 다릅니다.' , target : 'rePassword'}
    }

    return {type: true, message: '', target : ''};
}