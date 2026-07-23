import './App.css'
import '@/assets/css/common.css'

import AppRoutes from "@/routes/AppRoutes.tsx";
import LoadingBar from "@/components/global/LoadingBar.tsx";
import {Toaster} from "sonner";

function App() {
  return (
      <>
          <LoadingBar/>
          <div className='mainContainer'>
              <Toaster />
              <AppRoutes/>
          </div>
      </>
  )
}

export default App
