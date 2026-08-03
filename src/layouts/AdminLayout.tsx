import {Outlet} from "react-router-dom";
import LayoutSideBar from "@/pages/common/LayoutSideBar.tsx";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar.tsx";
import {Separator} from "@/components/ui/separator.tsx";

export default function AuthorSettingsAdminLayout (){

    return (
        <div id='main-layout' className='w-full h-full'>
            <SidebarProvider>
                <LayoutSideBar variant="sidebar" side="left"/>
                <SidebarInset>
                    <header className="flex h-14 items-center gap-2 px-4">
                        <SidebarTrigger />  {/*사이드바 에 대한 on/off(접기) 트리거*/}
                        {/**/}
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        {/*헤더 Breadcrumb 쓰기*/}

                    </header>
                    <main className="flex-1 p-4">
                        {/*<SidebarTrigger/>*/}
                        <Outlet/>
                    </main>
                </SidebarInset>
            </SidebarProvider>

        </div>
    )
}