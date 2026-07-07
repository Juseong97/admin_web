import {apiErrorHandler} from "@/services/api/apiErrorHandler.ts";

/*인증을 받지 않는 Api 통신의 클라이언트*/
interface requestEntity {
    reqUrl : string
    queryString? : Record<string, unknown>,
    body? : unknown,
    options? : RequestInit
}

const BASE_URL = "http://localhost:3001";
const DEFAULT_TIMEOUT = 10000;

//fetch로 변경
// header 정보에 token값 넣기
// body json stringFy()
// response에 대한 응답값 처리(400 ~ , 500 ~)
// timeout에 대한 AbortContoller 제어하기(기본 10초)
export const publicApiClient = {
    get : async (req : requestEntity) => {
        //fetch는 timeout 기능이 없어서 AbortController()를 직접구현하여 사용
        const controller = new AbortController();
        const timeOutId = setTimeout(()=> controller.abort() , DEFAULT_TIMEOUT);

        const bindingQuery = Object.entries(req.queryString || {}).map(([key, value], idx : number)=> {
            let preFix = "";
            if(idx === 0) preFix = "?";
            return preFix + key + "=" + encodeURIComponent(String(value));
        }).join("&");

        const reqOptions : RequestInit = {
            ...req.options,
            method : 'GET',
            signal : controller.signal,
            headers : {
                ...req.options?.headers
            }
        };
        
        try {
            // await 쓰면 Promise 객체를 자동반환 >> (이전) fetch().then() --> await 후 then() 하면 에러 발생!
            const response = await fetch(`${BASE_URL}${req.reqUrl}${bindingQuery}`,reqOptions);
            return await apiErrorHandler(response); // await 생략가능
        } catch (error : unknown){
            if(error instanceof Error){
                alert(error.message);
            } else {
                alert("알 수 없는 네트워크 에러가 발생했습니다.");
            }

        } finally {
            // 로딩 컴포넌트
            clearTimeout(timeOutId);
        }
    },
    post : async (req : requestEntity) => {
        const controller = new AbortController();
        const timeoutId = setTimeout(()=> controller.abort(),DEFAULT_TIMEOUT);

        const reqOptions : RequestInit = {
            ...req.options,
            method : 'POST',
            body : JSON.stringify(req.body),
            headers : {
                'Content-Type' : 'application/json',
                'charset' :'UTF-8'
            }
        }

        try {
            const response = await fetch(`${BASE_URL}${req.reqUrl}`, reqOptions);
            return await apiErrorHandler(response);
        }catch (error : unknown){
            if(error instanceof Error){
                alert(error.message);
            } else {
                alert("알 수 없는 네트워크 에러가 발생하였습니다.");
            }
        } finally {
            // 로딩 컴포넌트
            clearTimeout(timeoutId);
        }
    }
}