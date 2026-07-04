import {Outlet} from "react-router-dom";
import bgImage from "@/assets/images/loginLayout.png";

export default function LoginLayout(){
    return(
        <div className="flex min-h-screen items-center justify-center bg-slate-950 bg-cover bg-center bg-no-repeat">

            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{backgroundImage : `url(${bgImage})`}}>

            </div>
            {/*<div className="z-10 flex-1 m-6 w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 shadow-sm">*/}
            <div className="z-10 flex-1 m-6 w-full max-w-md">
                <Outlet/>
            </div>
        </div>
    )
}