import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu, SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar.tsx";
import {ChevronDown, User2} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuShortcut, DropdownMenuTrigger} from "@/components/ui/dropdown-menu.tsx";

export default function LayoutSideBar() {
    return (
        <Sidebar variant="sidebar" side="left" collapsible="icon">
            {/*헤더*/}
            <SidebarHeader>
                <SidebarMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <SidebarMenuButton>
                                select WorkSpace
                                <ChevronDown className={'ml-auto'}/>
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className={"w-[--radix-popper-anchor-width]"}>
                            <DropdownMenuItem>
                                <span>Acme Inc</span>
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenu>
            </SidebarHeader>
            {/*컨텐츠*/}
            <SidebarContent>

            </SidebarContent>

            {/*푸터*/}
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