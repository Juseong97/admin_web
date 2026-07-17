import LoadingBarGif from "@/assets/images/loading-bar.gif"
import {globalStore} from "@/components/global/globalStore.ts";
import {useShallow} from "zustand/react/shallow";

/*
 ({state} : {state : boolean}) --> 바로 파라미터 변수 접근 가능
  (state : {state : boolean}) --> state.state로 파라미터 변수 접근해야됨.
* */
export default function LoadingBar ({state} : {state : boolean}) {
    // const bears = globalStore(state => state.bears);
    // const food = globalStore(state => state.food);
    // const isShow = globalStore(state => state.isShow);
    // const increase = (number : number) => globalStore(state => state.increase(number));
    // const feed = (food : string) => globalStore(state => state.feed(food));
    // const setShow = () => globalStore(set => set.setShow(this.state));
    const {bears, food, isShow, increase, feed, setShow } = globalStore(useShallow(state => (
            {
                bears : state.bears,
                food : state.food,
                isShow : state.isShow,
                increase : state.increase,
                feed : state.feed,
                setShow : state.setShow
            }
        )
    ))

    if(state){
        console.log(food);
        console.log(bears);
        feed('된장찌개');
        increase(1);
        setShow(true)
        console.log(food);
        console.log(bears);
        console.log(isShow);
    }

    return (
        <div className="loading-bar-container" style={{display : isShow ? 'block' : 'none'}}>
            <h1>{bears} : bears Count</h1>
            <h1>{food} : food </h1>
            <img src={LoadingBarGif} alt="Loading"/>
        </div>
    )
}