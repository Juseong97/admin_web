import {Outlet} from "react-router-dom";
import LayoutSideBar from "@/pages/common/LayoutSideBar.tsx";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar.tsx";

export default function AuthorSettingsAdminLayout (){

    return (
        <div id='main-layout' className='w-full h-full'>
            <SidebarProvider>
                <LayoutSideBar/>
                <main>
                    <SidebarTrigger/>
                    <Outlet/>
                </main>
            </SidebarProvider>

        </div>
    )
}