import LoadingBarGif from "@/assets/images/loading-bar.gif"
import {create} from "zustand";

export default function LoadingBar (state : boolean) {
    const loadingBar = create((set) => ({

    }))

    return (
        <div className="loading-bar-container" style={{display : state ? 'block' : 'none'}}>
            <img src={LoadingBarGif} alt="Loading"/>
        </div>
    )
}