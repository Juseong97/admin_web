import './App.css'
import '@/assets/css/common.css'

import AppRoutes from "@/routes/AppRoutes.tsx";
import LoadingBar from "@/components/global/LoadingBar.tsx";

function App() {
  return (
      <>
          <LoadingBar/>
          <div className='mainContainer'>
              <AppRoutes/>
          </div>
      </>
  )
}

export default App
