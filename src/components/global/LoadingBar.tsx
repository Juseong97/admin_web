import LoadingBarGif from "@/assets/images/loading-bar.gif"
import globalStore from "@/services/global/globalStore.ts";

/*
 ({state} : {state : boolean}) --> 바로 파라미터 변수 접근 가능
  (state : {state : boolean}) --> state.state로 파라미터 변수 접근해야됨.
* */
export default function LoadingBar () {
    const bears = globalStore(state => state.bears);
    const food = globalStore(state => state.food);
    const isShow = globalStore(state => state.isShow);

    return (
        <div className="loading-bar-container" style={isShow ? undefined : {display : 'none'}}>
            <p className="loading-bar-title">{food + bears} 데이터 처리중입니다. 잠시만 기다려 주세요.</p>
                <img src={LoadingBarGif} alt="Loading"/>
        </div>
    )
}