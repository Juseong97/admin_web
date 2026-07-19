import userTokenHandler from './userTokenHandler';
import apiErrorHandler from '@/services/api/apiErrorHandler.ts';
import {isEmptyFile} from "@/utils/cmmnUtils.ts";

const BASE_URL = 'http://localhost:3001/';
const DEFAULT_TIMEOUT = 10000;

/*인증이 필요한 Api 통신의 클라이언트*/
export interface authRequestEntity {
    reqUrl : string
    queryString? : Record<string, unknown>,
    body? : unknown,
    options? : RequestInit,
    loadingBarYn : string,
    fileForm? : FormData
}


/*인증 token이 필요한 경우의 fetch*/
export const authApiClient = {
    get : async (req : authRequestEntity) => {
        // 로딩바
        // if(req.loadingBarYn === 'Y'){
        //     function showLoadingBar (){
        //
        //     }
        // }

        //통신 제한 시간
        const controller = new AbortController();
        const timeOutId = setTimeout(() => controller.abort,DEFAULT_TIMEOUT);

        //token 확인
        const jToken = userTokenHandler.getToken();

        //unknown 일 경우 꼭 type 검사 또는 대체값을 넣기
        const bindingQuery = Object.entries(req.queryString || {}).map(([key,value],idx) => {
            let preFix = ''
            if(idx ===0){
                preFix = '?'
            }
            return preFix + key + '=' + encodeURIComponent(String(value));
        }).join('&');

        // options
        const reqOptions : RequestInit = {
            ...req.options,
            method : 'GET',
            signal : controller.signal,
            headers : {
                ...req.options?.headers,
                "Content-Type" : 'application/json',
                "Accept" : 'json',
                "charset" : 'UTF-8',
                "Authorization" : 'Bearer ' + jToken
            }
        }

        try {
            const response = await fetch(`${BASE_URL}${req.reqUrl}${bindingQuery}`,reqOptions);
            return await apiErrorHandler(response);
        } catch (error){
            if(error instanceof Error) {
                throw new Error(error.message, {
                    cause : error
                })
            }
            throw new Error("알수 없는 에러가 발생",{cause : error});
        } finally {
            clearTimeout(timeOutId);
        }
    },
    // try에서 return문에 await를 쓰지 않으면 throw 한 Error들이 catch에 들어가지 않는다
    post : async (req : authRequestEntity) => {
        const controller = new AbortController();
        const timeOutId = setTimeout(() => controller.abort(),DEFAULT_TIMEOUT);
        const jToken = userTokenHandler.getToken();
        const reqOptions : RequestInit = {
            ...req.options?.headers,
            method : 'POST',
            headers : {
                "Content-Type" : 'application/json',
                "charset" : 'UTF-8',
                "Authorization" : 'Bearer ' + jToken,
            },
            body : JSON.stringify(req.body),
            signal : controller.signal
        }

        try {
            const response = await fetch(`${BASE_URL}${req.reqUrl}`,reqOptions);
            return await apiErrorHandler(response);
        } catch (error){
            if(error instanceof Error) {
                throw new Error(error.message, {
                    cause : error
                })
            }

            throw new Error("알수 없는 에러가 발생",{cause : error});
        } finally {
            clearTimeout(timeOutId);
        }
    },
    put : async (req : authRequestEntity) => {
        const controller = new AbortController();
        const timeOutId = setTimeout(() => controller.abort(),DEFAULT_TIMEOUT);

        const reqOptions : RequestInit = {
            ...req.options,
            method : 'PUT',
            headers : {
                "Content-Type" : 'application/json',
                "charset" : 'UTF-8',
            },
            body : JSON.stringify(req.body),
            signal : controller.signal
        }

        try {
            const response = await fetch(`${BASE_URL}${req.reqUrl}`,reqOptions);
            return await apiErrorHandler(response);
        } catch (error){
            if(error instanceof Error) {
                throw new Error(error.message, {
                    cause : error
                })
            }

            throw new Error("알수 없는 에러가 발생",{cause : error});
        } finally {
            clearTimeout(timeOutId);
        }
    },
    delete : async (req : authRequestEntity) => {
        const controller = new AbortController();
        const timeOutId = setTimeout(() => controller.abort(),DEFAULT_TIMEOUT);

        const reqOptions : RequestInit = {
            ...req.options,
            method : 'DELETE',
            body : req.body !== undefined ? JSON.stringify(req.body) : undefined,
            headers : {
                "Content-Type" : 'application/json',
                "charset" : 'UTF-8',
                "Accept" : 'json'
            },
            signal : controller.signal
        }

        try {
            const response = await fetch(`${BASE_URL}${req.reqUrl}`,reqOptions);
            return await apiErrorHandler(response);
        } catch (error){
            if(error instanceof Error) {
                throw new Error(error.message, {
                    cause : error
                })
            }

            throw new Error("알수 없는 에러가 발생",{cause : error});
        } finally {
            clearTimeout(timeOutId);
        }

    },
    postFile : async (req : authRequestEntity) => {
        const controller = new AbortController();
        const timeOutId = setTimeout(()=> controller.abort(), (DEFAULT_TIMEOUT + 10000));
        const hasBody = req.body !== undefined && req.body !== null;
        let finalizedBody: BodyInit | undefined = undefined;
        if(hasBody){
            finalizedBody = ! isEmptyFile(req.fileForm) ? (req.body as FormData) : JSON.stringify(req.body);
        }

        const reqOptions : RequestInit = {
            ...req.options,
            method : 'POST',
            headers : {
                ...( (hasBody && isEmptyFile(req.fileForm) ) && {"Content-Type" : 'application/json', "charset":'UTF-8'}),
                ...req.options?.headers
            },
            body : finalizedBody,
            signal : controller.signal
        }

        try {
            const response = await fetch(`${BASE_URL}${req.reqUrl}`, reqOptions);
            return await apiErrorHandler(response);
        } catch (error){
            if(error instanceof Error) {
                throw new Error(error.message, {
                    cause : error
                })
            }

            throw new Error("알수 없는 에러가 발생",{cause : error});
        } finally {
            clearTimeout(timeOutId);
        }
    }
}