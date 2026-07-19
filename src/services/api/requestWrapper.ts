import globalStore from "@/services/global/globalStore.ts";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve,ms));
const requestWrapper = async (url :string, reqOptions : RequestInit ) => {
    try {
        globalStore.getState().setShow(true);
        globalStore.getState().feed('로그인');
        await delay(1500);
        // await 쓰면 Promise 객체를 자동반환 >> (이전) fetch().then() --> await 후 then() 하면 에러 발생!
        return await fetch(url ,reqOptions);
    }  finally {
        // 로딩 컴포넌트
        globalStore.getState().setShow(false);
    }
}

export default requestWrapper;
