import axios from "axios";

//fetch로 변경
export const publicApiClient = () => {
    const BASE_URL = "http://localhost:3001";

    const get = (subUrl : string) => {
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

    return {
        get,
        post
    }
}