import './App.css'
import AppRoutes from "@/routes/AppRoutes.tsx";
import LoadingBar from "@/components/global/LoadingBar.tsx";
import {globalStore} from "@/components/global/globalStore.ts";

function App() {
    const isShow = globalStore(state=> state.isShow);

  return (
      <>
          <div className='mainContainer'>
              <AppRoutes/>
              <LoadingBar state={isShow}/>
          </div>
      </>
  )
}

export default App
