import './App.css'
import '@/assets/css/common.css'

import AppRoutes from "@/routes/AppRoutes.tsx";
import {Toaster} from "sonner";
import globalStore from "@/services/global/globalStore.ts";

function App() {
    const isDialogShow = globalStore(state => state.isDialogSHow);
  return (
      <>
          {/*<LoadingBar/>*/}
          <Toaster position='top-center'/>
          <div className='w-full h-full absolute bg-black opacity-70 z-99 zzz' style={isDialogShow ? undefined : {display : 'none'}}></div>
          <div className='mainContainer'>
              {/*<div className='w-full h-full absolute bg-black opacity-70 z-9999 zzz' ></div>*/}
              <AppRoutes/>
          </div>
      </>
  )
}

export default App
