import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem
} from "@/components/ui/sidebar.tsx";
import {User2} from "lucide-react";
import {DropdownMenu} from "@/components/ui/dropdown-menu.tsx";

export default function LayoutSideBar() {
    return (
        <Sidebar variant="sidebar" side="left" collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <DropdownMenu>

                    </DropdownMenu>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>

            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <User2/> Username
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}