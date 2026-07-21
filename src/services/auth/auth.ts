interface LoginRequest {
    email : string,
    password : string
}

interface LoginResponse {
    authKey : string,
    expiredDt : string,
    role : Array<string>,
    name : string
}

interface signUpRequest {
    email : string,          /*이메일*/
    memberId : string,       /*아이디*/
    name : string,           /*이름*/
    addr : string,           /*주소*/
    phoneNumber : string,    /*휴대폰 번호*/
    password : string,       /*패스워드*/
    rePassword : string      /*패스워드(확인)*/
}

export type {LoginRequest, LoginResponse, signUpRequest,}
