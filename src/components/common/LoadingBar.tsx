import LoadingBarGif from "@/assets/images/loading-bar.gif"

export default function LoadingBar () {
    alert(window.screen.height);
    alert(window.screen.width);
    return (
        <div className="loading-bar-container">
            <img src={LoadingBarGif} alt="Loading"/>
        </div>
    )
}