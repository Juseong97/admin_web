import './App.css'
import '@/assets/css/common.css'

import AppRoutes from "@/routes/AppRoutes.tsx";
import LoadingBar from "@/components/global/LoadingBar.tsx";
import {Toaster} from "sonner";
import globalStore from "@/services/global/globalStore.ts";

function App() {
    const isDialogShow = globalStore(state => state.isDialogSHow);
  return (
      <>
          <LoadingBar/>
          <div className='w-full h-full absolute bg-black opacity-70 z-99 zzz' style={isDialogShow ? undefined : {display : 'none'}}>
              {/*{alert("현재 APP"+globalStore.getState().isDialogSHow)}*/}
          </div>
          <div className='mainContainer'>
              <Toaster />
              {/*<div className='w-full h-full absolute bg-black opacity-70 z-9999 zzz' ></div>*/}
              <AppRoutes/>
          </div>
      </>
  )
}

export default App
