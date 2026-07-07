/*status 코드별 공통 핸들러 처리*/

export async function apiErrorHandler(response: Response) {
    if (!response.ok) {
        switch (response.status) {
            case 401: // 로그인 인증오류
                alert("로그인 세션이 만료되었습니다. \n 로그인 화면으로 이동합니다.");
                window.location.href = "/login";
                break;
            case 403: // 접근 권한오류
                alert("접근 권한이 없습니다.");
                break;
            case 500: // 서버 에러
                alert("서버에 에러가 발생하였습니다.");
                break;
            default :
                alert(`알 수 없는 에러가 발생하였습니다. (코드 : ${response.status})`);
        }

        throw new Error(`[ApiErrorHandler] >> ${response.status}`);
    }

    return response.json();
}