import {toast} from "sonner";
import globalStore from "@/services/global/globalStore.ts";
import {delay} from "@/utils/cmmnUtils.ts";

interface ToastPromiseHandlerParams<T> {
    promiseFn : () => Promise<T>, /*실행 함수*/
    loadingMsg? : string,
    successMsg? : string,
    warningMsg? : string,
    infoMsg? : string,
    errorMsg? : string,
    callback? : (data : Promise<T> | T) => void,
}
export const toastHandler = {
    promise : async <T>({promiseFn, loadingMsg = '데이터 처리중입니다...', successMsg, errorMsg ='오류가 발생 했습니다.', callback} : ToastPromiseHandlerParams<T>) => {
        /*로딩바*/
        globalStore.getState().setDialogShow(true);
        const loadingId = toast.loading(loadingMsg);
        await delay(1500);
        /**/

        if (promiseFn) {
            toast.promise(
                promiseFn(),
                {
                    success: (data: T) => { // promiseFn 함수 실행 후 반환된 promise 객체를 callback함수의 인자로 반환한다.
                        globalStore.getState().setDialogShow(false);
                        if (typeof callback === 'function') {
                            callback(data);
                        }
                        toast.dismiss(loadingId);   /*로딩바 제거*/
                        return successMsg;
                    },
                    error: (error: Error) => {
                        console.log(error);
                        return error.message || errorMsg
                    }
                });
        }
    },
    loading : async () => {
        const id = toast.loading('데이터 처리중입니다...');
        globalStore.getState().setDialogShow(true);
        await delay(1500);
        globalStore.getState().setDialogShow(false);
        toast.dismiss(id);
    },
    info : (infoMessage : string) => {
        toast.info(null
            , {
                description : infoMessage,
                closeButton : true,
            }
        );
    },
    warning : (warningMessage : string) => {
        toast.warning(null
            , {
                description : warningMessage,
                closeButton : true,
                duration : 2000
            }
        );
    },

    error : (errorMessage : string) => {
        toast.error(null
            ,{
                description: errorMessage,
                closeButton: true,
                duration : 2000,

            });
    }

}
