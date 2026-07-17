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

export type {LoginRequest, LoginResponse}
