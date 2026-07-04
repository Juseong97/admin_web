import axios from "axios";

//fetch로 변경
export const authApiClient = () => {
    const BASE_URL = "http://localhost:3001/";

    const get = (subUrl : string) => {
        /*Authorization 부분 추가 필요*/

        return axios.get(BASE_URL+subUrl,{
            timeout : 3000
        });
    }

    const post = (subUrl : string) => {
        return axios.get(BASE_URL+subUrl,{
            headers : {"Content-Type": "application/json"},
            timeout : 3000
        });
    }

    const put = (subUrl : string) => {
        return axios.get(BASE_URL+subUrl,{
            headers : {"Content-Type": "application/json"},
            timeout : 3000
        });
    }

    const del = (subUrl : string) => {
        return axios.get(BASE_URL+subUrl,{
            headers : {"Content-Type": "application/json"},
            timeout : 3000
        });
    }

    return {
        get,
        post,
        put,
        del
    }
}