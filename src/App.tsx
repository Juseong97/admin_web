import './App.css'
import '@/assets/css/common.css'

import AppRoutes from "@/routes/AppRoutes.tsx";
import {Toaster} from "sonner";
import globalStore from "@/services/global/globalStore.ts";
import { CircleX, CheckCircle2, Info, AlertTriangle } from "lucide-react";
function App() {
    const isDialogShow = globalStore(state => state.isDialogSHow);
  return (
      <>
          {/*<LoadingBar/>*/}
          <Toaster
              position='top-center'
              closeButton
              toastOptions={{
                    classNames : { closeButton : '!left-auto !right-2 !top-4 !transform-none',}
              }}
              icons={{
                  error: <CircleX className="w-5 h-5 text-red-500" />,
                  success: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
                  info: <Info className="w-5 h-5 text-sky-500" />,
                  warning: <AlertTriangle className="w-5 h-5 text-amber-500" />,
              }}
          />
          <div className='w-full h-full absolute bg-black opacity-70 z-99 zzz' style={isDialogShow ? undefined : {display : 'none'}}></div>
          <div className='mainContainer'>
              {/*<div className='w-full h-full absolute bg-black opacity-70 z-9999 zzz' ></div>*/}
              <AppRoutes/>
          </div>
      </>
  )
}

export default App
