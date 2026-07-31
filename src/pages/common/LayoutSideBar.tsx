import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem
} from "@/components/ui/sidebar.tsx";
import {ChevronDown, Plus, User2} from "lucide-react";
import {Collapsible, CollapsibleTrigger} from "@/components/ui/collapsible.tsx";

export default function LayoutSideBar() {
    return (
        <Sidebar variant="sidebar" side="left" collapsible="icon">
            {/*헤더*/}
            <SidebarHeader>
                <SidebarMenu>
                    {/*<DropdownMenu>*/}
                    {/*    <DropdownMenuTrigger>*/}
                    {/*        <SidebarMenuButton>*/}
                    {/*            select WorkSpace*/}
                    {/*            <ChevronDown className={'ml-auto'}/>*/}
                    {/*        </SidebarMenuButton>*/}
                    {/*    </DropdownMenuTrigger>*/}
                    {/*    <DropdownMenuContent className={"w-[--radix-popper-anchor-width]"}>*/}
                    {/*        <DropdownMenuItem>*/}
                    {/*            <span>Acme Inc</span>*/}
                    {/*            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>*/}
                    {/*        </DropdownMenuItem>*/}
                    {/*    </DropdownMenuContent>*/}
                    {/*</DropdownMenu>*/}
                </SidebarMenu>
            </SidebarHeader>
            {/*컨텐츠*/}
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupAction>
                        <Plus/> <span className={'sr-only text-black'}>Add Project</span>
                    </SidebarGroupAction>
                </SidebarGroup>
                <Collapsible>
                    <SidebarGroup>
                        <SidebarGroupLabel asChild>
                            <CollapsibleTrigger>
                                <ChevronDown
                                    className={'ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180'}/>
                                홈플러스
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>
                    </SidebarGroup>
                </Collapsible>
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